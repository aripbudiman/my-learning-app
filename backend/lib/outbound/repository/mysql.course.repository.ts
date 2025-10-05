import { Course, CourseCreate } from '@lib/models/course.model'
import database from '@lib/configs/database'
import { CoursePort } from '@lib/outbound/course.port'

export class MySqlCourseRepository implements CoursePort {
    async create(data: CourseCreate): Promise<Course> {
        const course = await database.courses.create({
            data: { ...data },
            include: {
                modules: {
                    select: {
                        _count: {
                            select: {
                                lessons: true,
                            },
                        },
                    },
                },
            },
        })
        return course as Course
    }

    async update(id: number, data: CourseCreate): Promise<Course> {
        const course = await database.courses.update({
            where: { id },
            data: { ...data },
            include: {
                modules: {
                    select: {
                        _count: {
                            select: {
                                lessons: true,
                            },
                        },
                    },
                },
            },
        })
        return course as Course
    }

    async delete(id: number): Promise<void> {
        await database.courses.delete({ where: { id } })
    }

    async find(id: number): Promise<Course | null> {
        const course = await database.courses.findUnique({
            where: { id },
            include: {
                modules: {
                    select: {
                        _count: {
                            select: {
                                lessons: true,
                            },
                        },
                    },
                },
            },
        })
        return course
    }

    async findAll(limit = 10, page = 1): Promise<Course[]> {
        const courses = await database.courses.findMany({
            skip: (page - 1) * limit,
            take: limit,
            select: {
                id: true,
                nameCourse: true,
                description: true,
                colorTheme: true,
                icon: true,
                modules: {
                    select: {
                        _count: {
                            select: {
                                lessons: true,
                            },
                        },
                    },
                },
            },
        })
        return courses
    }

    async count(): Promise<number> {
        const count: number = await database.courses.count()
        return count
    }
}
