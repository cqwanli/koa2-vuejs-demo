var router = require('koa-router')();

router.get('test', async function (ctx, next) {
  await ctx.render('test');
});

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
});
module.exports = router;
