const Koa=require('koa')
const app=new Koa()

app.use(async(ctx)=>{
    if(ctx.url==='/'&&ctx.method==='GET'){//请求路径为根目录并且方式为GET时,也就是访问http://127.0.0.1:3000的时候
        // 显示表单页面
        let html=`
            <h1>GET请求</h1>
            <form method='POST' action='/'>
                <p>username</p>
                <p><input name='username'/></p>
                <p>age</p>
                <p><input name='age'/></p>
                <button type='submit'>submit</button>
            </form>
        `
        ctx.body=html
    }else if(ctx.url==='/'&&ctx.method==='POST'){//请求路径为根目录并且方式为POST时
        let postData=await parsePostData(ctx)
        ctx.body=postData
    }else{
        ctx.body='<h1>404</h1>'
    }
})

// 处理post请求
function parsePostData(ctx){//从ctx对象中接收数据,变成字符串格式
    return new Promise((resolve,reject)=>{
        // try...catch...用于处理错误
        try{
            let postdata=''
            ctx.req.addListener('data',(data)=>{//原生方法addListener,接收data
                postdata+=data
            })
            ctx.req.on('end',()=>{//KOA提供的方法,监听方法结束后传递数据
                let parseData=parseQueryStr(postdata)//将字符串对象转换为json对象
                resolve(parseData)
            })
        }catch(error){

        }
    })
}
function parseQueryStr(queryStr){
    let queryData={}
    let queryStrList=queryStr.split('&')//把字符串变成数组
    for(let [index,queryStr] of queryStrList.entries()){//queryStrList.entries()返回的是一个带索引的数组
        let itemList=queryStr.split('=')
        queryData[itemList[0]]=decodeURIComponent(itemList[1])//用原生decodeURIComponent处理中文,通过key:value方式添加到json对象
    }
    return queryData
}

app.listen(3000,()=>{
    // 服务启动后的回调
    console.log('服务启动,端口3000')
})