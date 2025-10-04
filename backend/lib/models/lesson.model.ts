import { LessonType } from '@prisma/client'
import { t } from 'elysia'

export interface Lessons {
    id: number
    moduleId: number
    lessonTitle: string
    description: string
    lessonType: LessonType
    pointsReward: number
    starterCode: string
    instructions: string
    expectedOutput: string
    orderIndex: number
    createdAt?: Date
    updatedAt?: Date
}

export type LessonCreate = Omit<Lessons, 'id' | 'createdAt' | 'updatedAt'>

export const lessonSchema = t.Object({
    id: t.Optional(t.Integer()),
    moduleId: t.Integer(),
    lessonTitle: t.String(),
    description: t.String(),
    lessonType: t.Enum(LessonType),
    pointsReward: t.Integer(),
    starterCode: t.String(),
    instructions: t.String(),
    expectedOutput: t.String(),
    orderIndex: t.Integer(),
    createdAt: t.Optional(t.Date()),
    updatedAt: t.Optional(t.Date()),
})

export interface Query {
    limit: number
    page: number
}

export const lessonResponseSchema = t.Array(lessonSchema)

export const querySchema = t.Object({
    limit: t.Number(),
    page: t.Number(),
})
