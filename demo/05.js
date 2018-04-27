const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

// 简单路由示例-start
// const router = new Router({
//     prefix:'/test'//前缀-可用于增加层级
// })
// router.get('/', (ctx, next) => {
//     ctx.body = 'hello'
// }).get('/todo',(ctx, next)=>{
//     ctx.body='todo'
// })
// 简单路由示例-end

// 多层级路由-start
// 创建子路由结构
let home=new Router()
home.get('/test',async(ctx)=>{
    // 接受get明文参数
    //${ctx.query}会报错,必须先转换成字符串
    ctx.body=ctx.query
    // ctx.body=`${ctx.url}`
}).get('/todo',async(ctx)=>{
    ctx.body=`${ctx.url}`
})

let page=new Router()
page.get('/test',async(ctx)=>{
    ctx.body=`${ctx.url}`
}).get('/todo',async(ctx)=>{
    ctx.body=`${ctx.url}`
})
// 装载子路由至主路由下
let router=new Router()
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())
// 多层级路由-end

app.use(router.routes()) //主路由装载
    .use(router.allowedMethods()) //提交方法控制(get/post),allowedMethods只允许get方法

app.listen(3000, () => {
    // 服务启动后的回调
    console.log('服务启动,端口3000')
})