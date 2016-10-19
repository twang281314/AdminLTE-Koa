const Router = require('koa-router');
const indexCtrl = require('../controllers/index');
const chartsCtrl = require('../controllers/charts');

const router = new Router();

router.get('/', indexCtrl.index);
router.get('/charts',chartsCtrl.index);

module.exports = router;