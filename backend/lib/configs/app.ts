import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { courseController } from '@inbound/http/course.controller'
import { moduleController } from '@inbound/http/module.controller'
import { lessonController } from '@inbound/http/lesson.controller'
import { errorPlugin } from './plugins/error.plugin'

export const app = new Elysia()
    .use(cors())
    .use(errorPlugin)
    .use(courseController)
    .use(moduleController)
    .use(lessonController)
    .get('/', () => 'Hello Elysia')
