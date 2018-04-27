const Koa=require('koa')
const app=new Koa()
app.use(async(ctx)=>{
    let url=ctx.url
    // 通过request接收get请求
    // let request=ctx.request
    // let ctx_query=request.query
    // let ctx_querystring=request.querystring
    // 从context上下文中获取get请求
    let ctx_query=ctx.query
    let ctx_querystring=ctx.querystring

    ctx.body={
        url,ctx_query,ctx_querystring
    }
})
app.listen(3000,()=>{
    // 服务启动后的回调
    console.log('服务启动,端口3000')
})