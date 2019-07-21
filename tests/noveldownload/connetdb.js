var Koa = require('koa');
var Router = require('koa-router');
var cors = require('koa2-cors');
var bodyParser = require('koa-bodyparser');
var app = new Koa();
var router = new Router();
 
//下面的代码必须写在设置路由的前面
app.use(cors({
    origin: function (ctx) {
        return 'http://127.0.0.1:4000';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
//配置post提交数据的中间件
app.use(bodyParser());
 
//处理get请求
router.get('/get', async function(ctx){
    ctx.status=200;
    ctx.body={message: "我是"+ctx.request.header.host+"，我收到了你的get请求！！！"};
});
 
//处理post请求
router.post('/post', async function(ctx){
    ctx.status=200;
    ctx.body = { message: "我是" + ctx.request.header.host + "，你告诉我这是一个" + ctx.request.body['name']+"!!!"}
});
 
app
    .use(router.routes())
    .use(router.allowedMethods())
 
app.listen(3000);