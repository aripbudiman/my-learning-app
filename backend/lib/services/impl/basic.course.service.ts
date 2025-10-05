import { ValidationError } from 'elysia'
import { CourseSvc } from '@lib/services/contract/course.service'
import { Course, Query, CourseResponse, CourseCreate } from '@lib/models/course.model'
import { CoursePort } from '@lib/outbound/course.port'

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
            totalLessons: result.modules.reduce((sum, module) => sum + module._count.lessons, 0),
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
            totalLessons: result.modules.reduce((sum, module) => sum + module._count.lessons, 0),
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
            totalLessons: result.modules.reduce((sum, module) => sum + module._count.lessons, 0),
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
            totalLessons: course.modules.reduce((sum, module) => sum + module._count.lessons, 0),
        }))
        return result
    }
}
