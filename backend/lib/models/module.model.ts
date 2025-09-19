import { t } from 'elysia'

export interface Modules {
  id: number
  courseId: string
  title: string
  orderIndex: number
  estimatedTime: number
  createdAt?: Date
  updatedAt?: Date
}

export type moduleCreate = Omit<Modules, 'id' | 'createdAt' | 'updatedAt'>

export const moduleSchema = t.Object({
  id: t.Optional(t.Integer()),
  courseId: t.String(),
  title: t.String(),
  orderIndex: t.Integer(),
  estimatedTime: t.Integer(),
  createdAt: t.Optional(t.Date()),
  updatedAt: t.Optional(t.Date()),
})
