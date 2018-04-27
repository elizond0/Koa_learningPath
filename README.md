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

$ node 01.js 启动服务
http://127.0.0.1:3000 访问

## 2.post请求
获取Post请求的步骤：
1. 解析上下文ctx中的原生node.js对象req
2. 将POST表单数据解析成query string-字符串
3. 将字符串转换成JSON格式

ctx.request和ctx.req的区别:
1. ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
2. ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容。

## 3.使用koa-bodyparser中间件处理请求
安装:$ npm install --save koa-bodyparser
引入:const bodyParser = require('koa-bodyparser')
使用:app.use(bodyParser())
ctx.request.body就是已经处理过的json对象了

## 4.Koa2实现原生路由
要想实现原生路由，需要得到地址栏输入的路径，然后根据路径的不同进行跳转。
用ctx.request.url就可以实现。

## 5.Koa-router中间件
安装:$ npm install --save koa-router
引入:const Router = require('koa-router');const router = new Router()
使用:router.get('/', (ctx, next) => {//do something})
装载:app.use(router.routes()).use(router.allowedMethods()) 

