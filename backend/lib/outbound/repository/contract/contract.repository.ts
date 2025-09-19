import { Course, CourseCreate } from '@lib/model/course.model'

export interface CourseRepository {
  create(data: CourseCreate): Promise<Course>
}
