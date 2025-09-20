import { t } from 'elysia'

export interface Lessons {
    id: number
    moduleId: number
    title: string
    content: string
    exerciseCode: string
    orderIndex: number
    createdAt?: Date
    updatedAt?: Date
}

export type LessonCreate = Omit<Lessons, 'id' | 'createdAt' | 'updatedAt'>

export const lessonSchema = t.Object({
    id: t.Optional(t.Integer()),
    moduleId: t.Integer(),
    title: t.String(),
    content: t.String(),
    exerciseCode: t.String(),
    orderIndex: t.Integer(),
    createdAt: t.Optional(t.Date()),
    updatedAt: t.Optional(t.Date()),
})

export const lessonResponseSchema = t.Array(lessonSchema)

export interface Query {
    limit: number
    page: number
}

export const querySchema = t.Object({
    limit: t.Number(),
    page: t.Number(),
})
