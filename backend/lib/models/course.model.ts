import { DifficultyLevel } from '@prisma/client'
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
