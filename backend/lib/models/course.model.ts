import { DifficultyLevel, LessonType } from '@prisma/client'
import { t } from 'elysia'
import { Modules } from './module.model'

export interface Course {
    modules: Modules[]
    id: number
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
    totalLessons?: number
    createdAt?: Date
    updatedAt?: Date
}

export type SelectCourse = Pick<Course, 'id' | 'nameCourse'>

export interface CourseWithModules {
    id: number
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
    modules: {
        id: number
        batchTitle: string
        description: string
        difficultyLevel: DifficultyLevel
        originalPrice: string
        salePrice: string
        topics: string
        _count: { lessons: number }
    }[]
    createdAt?: Date
    updatedAt?: Date
}

export type CourseCreate = Omit<Course, 'id' | 'createdAt' | 'updatedAt' | 'modules'>

export interface CourseResponse {
    id: number
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
    totalLessons?: number | null
    createdAt?: Date
    updatedAt?: Date
}

export interface CourseWithBatchResponse {
    id: number
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
    totalBatches: number
    modules: {
        id: number
        batchTitle: string
        description: string
        totalLessons: number
        difficultyLevel: DifficultyLevel
        originalPrice: string
        salePrice: string
        topics: string[]
    }[]
}

export interface CourseWithLessonsRaw {
    id: number
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
    createdAt?: Date
    updatedAt?: Date
    modules: {
        id: number
        batchTitle: string
        description: string
        topics: string
        difficultyLevel: DifficultyLevel
        originalPrice: string
        salePrice: string
        _count: { lessons: number }
        lessons: {
            id: number
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
        }[]
    }[]
}

export interface CourseWithLessonsResponse {
    id: number
    nameCourse: string
    description: string
    icon: string
    colorTheme: string
    totalLessons: number
    totalBatches: number
    modules: {
        id: number
        batchTitle: string
        description: string
        totalLessons: number
        difficultyLevel: DifficultyLevel
        originalPrice: string
        salePrice: string
        topics: string[]
        lessons: {
            id: number
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
        }[]
    }[]
}

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
    totalLessons: t.Optional(t.Integer()),
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

export const lessonSchema = t.Object({
    id: t.Integer(),
    lessonTitle: t.String(),
    description: t.String(),
    lessonType: t.String(),
    pointsReward: t.Integer(),
    starterCode: t.String(),
    instructions: t.String(),
    expectedOutput: t.String(),
    orderIndex: t.Integer(),
    createdAt: t.Optional(t.Date()),
    updatedAt: t.Optional(t.Date()),
})

export const moduleWithLessonsSchema = t.Object({
    id: t.Integer(),
    batchTitle: t.String(),
    description: t.String(),
    totalLessons: t.Integer(),
    difficultyLevel: t.String(),
    originalPrice: t.Union([t.String(), t.Number()]),
    salePrice: t.Union([t.String(), t.Number()]),
    topics: t.Array(t.String()),
    lessons: t.Array(lessonSchema),
})

export const courseWithLessonsResponseSchema = t.Object({
    id: t.Integer(),
    nameCourse: t.String(),
    description: t.String(),
    icon: t.String(),
    colorTheme: t.String(),
    totalLessons: t.Integer(),
    totalBatches: t.Integer(),
    modules: t.Array(moduleWithLessonsSchema),
})
