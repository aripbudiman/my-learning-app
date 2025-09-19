import Elysia from 'elysia'
import { courseService } from '@lib/config/registry'
import { Course, courseSchema } from '@lib/model/course.model'
import { wrapResponse } from '@lib/utils/response'

export const courseController = new Elysia({ prefix: '/api/courses' }).decorate('courseService', courseService).post(
  '/',
  async ({ body, courseService }) => {
    const response = await courseService.create(body as Course)
    return wrapResponse(response, 201, 'Create course successfully')
  },
  {
    body: courseSchema,
  }
)
