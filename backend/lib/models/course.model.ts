import { t } from 'elysia'
import { CourseLevel } from '@prisma/client'
export { CourseLevel }

export interface Course {
  id: number
  name: string
  description: string
  level: CourseLevel
  createdAt?: Date
  updatedAt?: Date
}

export type CourseCreate = Omit<Course, 'id' | 'createdAt' | 'updatedAt'>

export const courseSchema = t.Object({
  id: t.Optional(t.Integer()),
  name: t.String(),
  description: t.String(),
  level: t.Enum(CourseLevel),
  createdAt: t.Optional(t.Date()),
  updatedAt: t.Optional(t.Date()),
})

export const courseResponseSchema = t.Object({
  id: t.Integer(),
  name: t.String(),
  description: t.String(),
  level: t.Enum(CourseLevel),
  createdAt: t.Optional(t.Date()),
  updatedAt: t.Optional(t.Date()),
})
