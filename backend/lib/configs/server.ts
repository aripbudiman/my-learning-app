import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { courseController } from '../inbound/http/course.controller'

export const app = new Elysia()
  .use(cors())
  .use(courseController)
  .get('/', () => 'Hello Elysia')
