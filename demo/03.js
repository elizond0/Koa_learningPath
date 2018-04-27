const Koa=require('koa')
const app=new Koa()
const bodyparser=require('koa-bodyparser')//引入中间件bodyparser 1/3

app.use(bodyparser())//bodyparser调用中间件 2/3

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
        let postData=ctx.request.body//通过中间件bodyparser处理 3/3
        ctx.body=postData
    }else{
        ctx.body='<h1>404</h1>'
    }
})

app.listen(3000,()=>{
    // 服务启动后的回调
    console.log('服务启动,端口3000')
})