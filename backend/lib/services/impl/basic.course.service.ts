import { ValidationError } from 'elysia'
import { CourseSvc } from '@lib/services/contract/course.service'
import { Course } from '@lib/models/course.model'
import { CoursePort } from '@lib/outbound/course.port'

export class BasicCourseService implements CourseSvc {
  constructor(private repository: CoursePort) {}
  async createCourse(data: Course): Promise<Course | ValidationError> {
    return await this.repository.create(data)
  }

  async updateCourse(id: number, data: Course): Promise<Course | Error> {
    return await this.repository.update(id, data)
  }

  async deleteCourse(id: number): Promise<string | Error> {
    await this.repository.delete(id)
    return 'deleted'
  }

  async getCourse(id: number): Promise<Course | Error | null> {
    const result: Course | null = await this.repository.find(id)
    if (!result) {
      throw new Error('Course not found')
    }
    return result
  }

  async getAllCourses(): Promise<Course[]> {
    return await this.repository.findAll(1, 10)
  }
}
