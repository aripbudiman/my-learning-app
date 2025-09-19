import { Course, CourseCreate } from '@lib/models/course.model'
import database from '@lib/configs/database'
import { CoursePort } from '@lib/outbound/course.port'

export class MySqlCourseRepository implements CoursePort {
  async create(data: CourseCreate): Promise<Course> {
    const course: Course = await database.courses.create({ data })
    return course
  }

  async update(id: number, data: CourseCreate): Promise<Course> {
    const course: Course = await database.courses.update({ where: { id }, data })
    return course
  }

  async delete(id: number): Promise<void> {
    await database.courses.delete({ where: { id } })
  }

  async find(id: number): Promise<Course | null> {
    const course: Course | null = await database.courses.findUnique({ where: { id } })
    return course
  }

  async findAll(): Promise<Course[]> {
    const courses: Course[] = await database.courses.findMany()
    return courses
  }
}
