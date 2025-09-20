import { t } from 'elysia'

export interface Modules {
  id?: number
  courseId: number | null
  title: string
  orderIndex: number
  estimatedTime: number
  createdAt?: Date
  updatedAt?: Date
}

export interface QuerySchema {
  limit: number
  page: number
}

export type ModuleCreate = Omit<Modules, 'id' | 'createdAt' | 'updatedAt'>

export const moduleSchema = t.Object({
  id: t.Optional(t.Integer()),
  courseId: t.Integer(),
  title: t.String(),
  orderIndex: t.Integer(),
  estimatedTime: t.Integer(),
  createdAt: t.Optional(t.Date()),
  updatedAt: t.Optional(t.Date()),
})

export const moduleResponseSchema = moduleSchema

export const paramsSchema = t.Object({
  id: t.Number(),
})

export const querySchema = t.Object({
  limit: t.Number(),
  page: t.Number(),
})
