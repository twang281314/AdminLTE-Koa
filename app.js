const koa = require('koa');
const logger = require('koa-logger');
const handlebars = require("koa-handlebars");
const responseTime = require('koa-response-time');

const app = koa();
const routes = require('./routes')

app.use(responseTime());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(handlebars({
    cache: false,
    extension: 'html',
    viewsDir: 'views',
    layoutsDir:'views/layouts',
    partialsDir: 'views/partials'
}));

app.use(routes.routes());

app.listen(3000, function () {
    console.log('koa listening on port 3000 ');
});