import { CourseSvc } from '@lib/services/contract/course.service'
import { Course } from '@lib/model/course.model'
import { CourseRepository } from '@lib/outbound/repository/contract/contract.repository'

export class BasicCourseService implements CourseSvc {
  constructor(private repository: CourseRepository) {}
  async create(data: Course): Promise<Course> {
    return this.repository.create(data)
  }
}
