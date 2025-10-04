import { t } from 'elysia'

export interface Course {
    id: number
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
    createdAt?: Date
    updatedAt?: Date
}

export type CourseCreate = Omit<Course, 'id' | 'createdAt' | 'updatedAt'>

export interface Query {
    limit: number
    page: number
}

export const courseSchema = t.Object({
    id: t.Optional(t.Integer()),
    nameCourse: t.String(),
    description: t.String(),
    icon: t.Optional(t.String()),
    colorTheme: t.Optional(t.String()),
    createdAt: t.Optional(t.Date()),
    updatedAt: t.Optional(t.Date()),
})

export const courseResponseSchema = t.Object({
    id: t.Integer(),
    nameCourse: t.String(),
    description: t.String(),
    icon: t.Optional(t.String()),
    colorTheme: t.Optional(t.String()),
    createdAt: t.Optional(t.Date()),
    updatedAt: t.Optional(t.Date()),
})

export const paramsSchema = t.Object({
    id: t.Number(),
})

export const querySchema = t.Object({
    limit: t.Number(),
    page: t.Number(),
})
