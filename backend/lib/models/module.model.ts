import { t } from 'elysia'
import { DifficultyLevel } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'

export interface Modules {
    _count?: {
        lessons: number
    }
    id?: number
    orderIndex: number
    courseId: number | null
    batchTitle: string
    description: string
    difficultyLevel: DifficultyLevel
    originalPrice: string
    salePrice: string
    topics: string
    createdAt?: Date
    updatedAt?: Date
}

export type SelectModules = Pick<Modules, 'id' | 'batchTitle'>

export interface ModuleRepository {
    id?: number
    orderIndex: number
    courseId: number | null
    batchTitle: string
    description: string
    difficultyLevel: DifficultyLevel
    originalPrice: Decimal
    salePrice: Decimal
    topics: string
    createdAt?: Date
    updatedAt?: Date
}

export interface QuerySchema {
    limit: number
    page: number
}

export type ModuleCreate = Omit<Modules, 'id' | 'createdAt' | 'updatedAt'>
export type ModuleRepositoryCreate = Omit<ModuleRepository, 'id' | 'createdAt' | 'updatedAt'>

export const moduleSchema = t.Object({
    id: t.Optional(t.Integer()),
    orderIndex: t.Integer(),
    courseId: t.Integer(),
    batchTitle: t.String(),
    description: t.String(),
    difficultyLevel: t.Enum(DifficultyLevel),
    originalPrice: t.String(),
    salePrice: t.String(),
    topics: t.String(),
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
