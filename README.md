# Koa_learningPath
[Koa](https://koa.bootcss.com/) -- 基于 Node.js 平台的下一代 web 开发框架

## 0.简介与安装
koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。 使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套， 并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件， 它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。

$ npm install -s koa

## 1.get请求
const Koa=require('koa')
const app=new Koa()
app.use(async(ctx)=>{
    let url=ctx.url
    // 从context上下文中获取get请求,也可以通过request接收get请求
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



