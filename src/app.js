import './config.js'
import Koa from 'koa'
import Router from '@koa/router'

const app = new Koa()
const pingRouter = new Router()

pingRouter.get('/ping', ctx => ctx.body = 'pong')

app
  .use(pingRouter.routes())
  .listen(process.env.PORT)

console.log(`Server is listening on ${process.env.PORT}`)