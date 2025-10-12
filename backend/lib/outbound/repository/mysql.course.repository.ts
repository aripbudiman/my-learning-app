import database from '@lib/configs/database'
import { Course, CourseCreate, CourseWithLessonsRaw, SelectCourse } from '@lib/models/course.model'
import { CoursePort } from '@lib/outbound/course.port'

export class MySqlCourseRepository implements CoursePort {
    async create(data: CourseCreate): Promise<Course> {
        const course = await database.courses.create({
            data: { ...data },
        })
        return course as Course
    }

    async update(id: number, data: CourseCreate): Promise<Course> {
        const course = await database.courses.update({
            where: { id },
            data: { ...data },
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
                modules: true,
            },
        })
        return course as unknown as Course
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
                        id: true,
                        batchTitle: true,
                        description: true,
                        difficultyLevel: true,
                        originalPrice: true,
                        salePrice: true,
                        topics: true,
                        _count: {
                            select: {
                                lessons: true,
                            },
                        },
                    },
                },
            },
        })
        return courses as unknown as Course[]
    }

    async count(): Promise<number> {
        const count: number = await database.courses.count()
        return count
    }

    async getMasterData(): Promise<SelectCourse[]> {
        const courses = await database.courses.findMany({
            select: {
                id: true,
                nameCourse: true,
            },
        })
        return courses as unknown as SelectCourse[]
    }

    async getCourseWithLessons(limit: number, page: number): Promise<CourseWithLessonsRaw[]> {
        const courses = await database.courses.findMany({
            skip: (page - 1) * limit,
            take: limit,
            include: {
                _count: {
                    select: {
                        modules: true,
                    },
                },
                modules: {
                    include: {
                        _count: {
                            select: {
                                lessons: true,
                            },
                        },
                        lessons: true,
                    },
                },
            },
        })
        return courses as unknown as CourseWithLessonsRaw[]
    }
}
