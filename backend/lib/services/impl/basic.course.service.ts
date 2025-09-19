import { CourseSvc } from '@lib/services/contract/course.service'
import { Course } from '@lib/models/course.model'
import { CoursePort } from '@lib/outbound/course.port'

export class BasicCourseService implements CourseSvc {
  constructor(private repository: CoursePort) {}
  async create(data: Course): Promise<Course> {
    return this.repository.create(data)
  }
}
