const Koa = require('koa')
const router = require('koa-router')()
const render = require('koa-art-template')
const path = require('path')

const app = new Koa

render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.art'
})

router.get('/:user', async ctx => {
  await ctx.render('page', {
    user: `this is user: ${ctx.params.user}`
  })
})

router.get('/', async ctx => {
  await ctx.render('index')
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)