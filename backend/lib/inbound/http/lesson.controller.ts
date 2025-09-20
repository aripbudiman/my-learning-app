import Elysia, { t } from 'elysia'
import { lessonService } from '@lib/configs/registry'
import { lessonResponseSchema, querySchema, lessonSchema } from '@lib/models/lesson.model'
import { wrapResponse } from '@lib/utils/response'
import { createResponseSchema } from '@lib/utils/schema'

export const lessonController = new Elysia({ prefix: '/api/lessons' })
    .decorate('lessonService', lessonService)
    .get(
        '/',
        async ({ lessonService, query }) => {
            const response = await lessonService.getAllLessons(query)
            return wrapResponse(response, 200, 'Get all lessons successfully')
        },
        {
            query: querySchema,
            response: {
                200: createResponseSchema(lessonResponseSchema),
            },
        }
    )
    .get(
        '/:id',
        async ({ params, lessonService }) => {
            const response = await lessonService.getLessonById(params.id)
            return wrapResponse(response, 200, 'Get lesson successfully')
        },
        {
            params: t.Object({
                id: t.Integer(),
            }),
            response: {
                200: createResponseSchema(lessonSchema),
            },
        }
    )
    .post(
        '/',
        async ({ body, lessonService }) => {
            const response = await lessonService.createLesson(body)
            return wrapResponse(response, 201, 'Create lesson successfully')
        },
        {
            body: lessonSchema,
            response: {
                201: createResponseSchema(lessonResponseSchema),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .delete(
        '/:id',
        async ({ params, lessonService }) => {
            const response = await lessonService.deleteLesson(params.id)
            return wrapResponse(response, 200, 'Delete lesson successfully')
        },
        {
            params: t.Object({
                id: t.Integer(),
            }),
            response: {
                200: createResponseSchema(t.String()),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .put(
        '/:id',
        async ({ params, body, lessonService }) => {
            const response = await lessonService.updateLesson(params.id, body)
            return wrapResponse(response, 200, 'Update lesson successfully')
        },
        {
            params: t.Object({
                id: t.Integer(),
            }),
            body: lessonSchema,
            response: {
                200: createResponseSchema(lessonSchema),
                400: createResponseSchema(t.Null()),
            },
        }
    )
