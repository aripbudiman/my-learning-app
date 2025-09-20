import Elysia, { t } from 'elysia'
import { moduleService } from '@lib/configs/registry'
import { ModuleCreate, moduleSchema, moduleResponseSchema, paramsSchema, querySchema } from '@lib/models/module.model'
import { wrapResponse } from '@lib/utils/response'
import { createResponseSchema } from '@lib/utils/schema'

export const moduleController = new Elysia({ prefix: '/api/modules' })
    .decorate('moduleService', moduleService)
    .post(
        '/',
        async ({ body, moduleService }) => {
            const response = await moduleService.createModule(body as ModuleCreate)
            return wrapResponse(response, 201, 'Create module successfully')
        },
        {
            body: moduleSchema,
            response: {
                201: createResponseSchema(moduleResponseSchema),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .put(
        '/:id',
        async ({ params, body, moduleService }) => {
            const response = await moduleService.updateModule(params.id, body)
            return wrapResponse(response, 200, 'Update module successfully')
        },
        {
            params: paramsSchema,
            body: moduleSchema,
            response: {
                200: createResponseSchema(moduleResponseSchema),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .delete(
        '/:id',
        async ({ params, moduleService }) => {
            const response = await moduleService.deleteModule(params.id)
            return wrapResponse(response, 200, 'Delete module successfully')
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
        '/:id',
        async ({ params, moduleService }) => {
            const response = await moduleService.getModule(params.id)
            return wrapResponse(response, 200, 'Get module successfully')
        },
        {
            params: paramsSchema,
            response: {
                200: createResponseSchema(moduleResponseSchema),
                400: createResponseSchema(t.Null()),
            },
        }
    )
    .get(
        '/',
        async ({ moduleService, query }) => {
            const response = await moduleService.getAllModules(query)
            return wrapResponse(response, 200, 'Get all modules successfully')
        },
        {
            query: querySchema,
            response: {
                200: createResponseSchema(t.Array(moduleResponseSchema)),
                400: createResponseSchema(t.Null()),
            },
        }
    )
