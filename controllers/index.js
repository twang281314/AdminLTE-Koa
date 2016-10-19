/**
 * index、控制器
 */

exports.index = function* (next) {
    yield this.render('index', {
        layout: 'index',
        title: 'Hello this is index ctrl'
    });
}