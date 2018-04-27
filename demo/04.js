const Koa = require('koa')
const app = new Koa()
const fs=require('fs')

app.use(async (ctx) => {
    let url = ctx.request.url
    let html = await route(url) //根据传入url的不同,返回不同的html,实现路由功能
    ctx.body = html
})

async function route(url) {
    let page = '404.html' //默认返回404页面
    switch (url) {
        case '/':
            page = 'index.html'
            break
        case '/index':
            page = 'index.html'
            break
        case '/todo':
            page = 'todo.html'
            break
        default:
            break
    }
    let html= await render(page)//渲染页面
    return html
}

async function render(page){
    // 需要读取文件,所以要引入node.js的fs模块
    return new Promise((resolve,reject)=>{
        let pageUrl=`../page/${page}`//路径
        fs.readFile(pageUrl,'binary',(err,data)=>{//binary表示二进制
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

app.listen(3000, () => {
    // 服务启动后的回调
    console.log('服务启动,端口3000')
})