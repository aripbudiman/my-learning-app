import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { courseController } from '../inbound/http/course.controller'

export const app = new Elysia()
  .use(cors())
  .use(courseController)
  .get('/', () => 'Hello Elysia')
  .listen(7500)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
