const koa = require('koa');
const router = require('koa-router')();

const app = koa();

router.get('/', function*(next) {
    this.body = 'app  is start';
});

app.use(router.routes());

app.listen(3000, function() {
    console.log('koa listening on port 3000 ');
});