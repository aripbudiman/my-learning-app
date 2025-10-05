import { Course, CourseCreate, CourseResponse, CourseWithBatchResponse, Query } from '@lib/models/course.model'
import { Modules } from '@lib/models/module.model'
import { CoursePort } from '@lib/outbound/course.port'
import { CourseSvc } from '@lib/services/contract/course.service'
import { ValidationError } from 'elysia'

export class BasicCourseService implements CourseSvc {
    constructor(private repository: CoursePort) {}
    async createCourse(data: CourseCreate): Promise<CourseResponse | ValidationError> {
        const result = await this.repository.create(data)
        return {
            id: result.id,
            nameCourse: result.nameCourse,
            description: result.description,
            colorTheme: result.colorTheme,
            icon: result.icon,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
        }
    }

    async updateCourse(id: number, data: CourseCreate): Promise<CourseResponse | Error> {
        const result = await this.repository.update(id, data)
        return {
            id: result.id,
            nameCourse: result.nameCourse,
            description: result.description,
            colorTheme: result.colorTheme,
            icon: result.icon,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
        }
    }

    async deleteCourse(id: number): Promise<string | Error> {
        await this.repository.delete(id)
        return 'deleted'
    }

    async getCourse(id: number): Promise<CourseResponse | Error | null> {
        const result: Course | null = await this.repository.find(id)
        if (!result) {
            throw new Error('Course not found')
        }
        return {
            id: result.id,
            nameCourse: result.nameCourse,
            description: result.description,
            colorTheme: result.colorTheme,
            icon: result.icon,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
        }
    }

    async getAllCourses(query: Query): Promise<CourseResponse[]> {
        const courses = await this.repository.findAll(query.limit, query.page)
        const result = courses.map((course) => ({
            id: course.id,
            nameCourse: course.nameCourse,
            description: course.description,
            colorTheme: course.colorTheme,
            icon: course.icon,
            totalLessons: course.modules.reduce((sum: number, module: Modules) => sum + module._count!.lessons, 0),
        }))
        return result
    }
    async getCourseWithBatch(query: Query): Promise<CourseWithBatchResponse[] | Error | null> {
        const courses = await this.repository.findAll(query.limit, query.page)
        const result = courses.map((course) => ({
            id: course.id,
            nameCourse: course.nameCourse,
            description: course.description,
            colorTheme: course.colorTheme,
            icon: course.icon,
            totalBatches: course.modules.length,
            modules: course.modules.map((module: Modules) => ({
                id: module.id,
                batchTitle: module.batchTitle,
                description: module.description,
                totalLessons: module._count?.lessons,
                difficultyLevel: module.difficultyLevel,
                originalPrice: module.originalPrice,
                salePrice: module.salePrice,
                topics: module.topics.split(','),
            })),
        }))
        return result as CourseWithBatchResponse[]
    }
}
