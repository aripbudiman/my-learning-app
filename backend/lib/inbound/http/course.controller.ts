import Elysia, { t } from 'elysia'
import { courseService } from '@lib/configs/registry'
import { Course, courseSchema, courseResponseSchema, paramsSchema, querySchema } from '@lib/models/course.model'
import { wrapResponse } from '@lib/utils/response'
import { createResponseSchema } from '@lib/utils/schema'

export const courseController = new Elysia({ prefix: '/api/courses' })
    .decorate('courseService', courseService)
    .post(
        '/',
        async ({ body, courseService }) => {
            const response = await courseService.createCourse(body as Course)
            return wrapResponse(response, 201, 'Create course successfully')
        },
        {
            body: courseSchema,
            response: {
                201: createResponseSchema(courseResponseSchema),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .get(
        '/:id',
        async ({ params, courseService }) => {
            const response = await courseService.getCourse(params.id)
            return wrapResponse(response, 200, 'Get course successfully')
        },
        {
            params: paramsSchema,
            response: {
                200: createResponseSchema(courseResponseSchema),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .put(
        '/:id',
        async ({ body, params, courseService }) => {
            const response = await courseService.updateCourse(params.id, body as Course)
            return wrapResponse(response, 200, 'Update course successfully')
        },
        {
            body: courseSchema,
            params: paramsSchema,
            response: {
                200: createResponseSchema(courseResponseSchema),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .delete(
        '/:id',
        async ({ params, courseService }) => {
            const response = await courseService.deleteCourse(params.id)
            return wrapResponse(response, 200, 'Delete course successfully')
        },
        {
            params: paramsSchema,
            response: {
                200: createResponseSchema(t.String()),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .get(
        '/',
        async ({ courseService, query }) => {
            const response = await courseService.getAllCourses(query)
            return wrapResponse(response, 200, 'Get all courses successfully')
        },
        {
            query: querySchema,
            response: {
                200: createResponseSchema(t.Array(courseResponseSchema)),
                400: createResponseSchema(t.Null()),
            },
        }
    )
