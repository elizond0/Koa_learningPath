const Koa=require('koa')
const app=new Koa()
app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set(//设置方法set接收三个参数,key:string,value:string,opts:{}
            'name','abc',{
                domain:'127.0.0.1',
                // path:'/index',//匹配的路径
                maxAge:3600*1000,//有效时间一小时
                expires:new Date('2018-12-31'),//失效时间
                httpOnly:false,//仅http协议生效
                overwrite:false,//是否支持重写
            }
        )
        ctx.body='cookies'
    }else{
        if(ctx.cookies.get('name')){//读取方法get
            ctx.body=ctx.cookies.get('name')
        }else{
            ctx.body='hello' 
        }
    }
})
app.listen(3000,()=>{
    // 服务启动后的回调
    console.log('服务启动,端口3000')
})