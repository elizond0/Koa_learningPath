const Koa=require('koa')
const views=require('koa-views')
const path=require('path')
const app=new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname,'../view'),{
    extension:'ejs'
}))

app.use(async(ctx)=>{
    let title='hello'
    await ctx.render('index',{title})//将title变量的值渲染到index.ejs模版中
})

app.listen(3000,()=>{
    // 服务启动后的回调
    console.log('服务启动,端口3000')
})