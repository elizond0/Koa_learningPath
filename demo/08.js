const Koa=require('koa')
const path=require('path')
const static=require('koa-static')
const app=new Koa()

const staticPath='../static'

app.use(static(path.join(__dirname,staticPath)))//讲本地路径的文件,通过相对路径映射到根目录下,http://127.0.0.1:3000/test.jpg
console.log(__dirname)//D:\GithubDesk\Koa_learningPath\demo

app.use(async(ctx)=>{
    ctx.body='hello'
})

app.listen(3000,()=>{
    // 服务启动后的回调
    console.log('服务启动,端口3000')
})