import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { courseController } from '@inbound/http/course.controller'
import { moduleController } from '@inbound/http/module.controller'

export const app = new Elysia()
  .use(cors())
  .use(courseController)
  .use(moduleController)
  .get('/', () => 'Hello Elysia')
