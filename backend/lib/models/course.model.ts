import { t } from 'elysia'
import { CourseLevel } from '@prisma/client'
export { CourseLevel }

export interface Course {
    id: number
    name: string
    description: string
    level: CourseLevel
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
    name: t.String(),
    description: t.String(),
    level: t.Enum(CourseLevel),
    icon: t.Optional(t.String()),
    colorTheme: t.Optional(t.String()),
    createdAt: t.Optional(t.Date()),
    updatedAt: t.Optional(t.Date()),
})

export const courseResponseSchema = t.Object({
    id: t.Integer(),
    name: t.String(),
    description: t.String(),
    level: t.Enum(CourseLevel),
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
