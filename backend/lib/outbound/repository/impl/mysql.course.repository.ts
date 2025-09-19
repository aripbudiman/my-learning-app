import { Course, CourseCreate } from '@lib/models/course.model'
import { CourseRepository } from '@lib/outbound/repository/contract/contract.repository'
import database from '@lib/configs/database'

export class MySqlCourseRepository implements CourseRepository {
  async create(data: CourseCreate): Promise<Course> {
    const course: Course = await database.courses.create({ data })
    return course
  }
}
