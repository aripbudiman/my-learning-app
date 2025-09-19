import { t, type TSchema } from 'elysia'

export function createResponseSchema(schema: TSchema) {
  return t.Object({
    data: schema,
    meta: t.Object({
      code: t.Integer(),
      message: t.String(),
      count: t.Optional(t.Integer()),
    }),
  })
}
