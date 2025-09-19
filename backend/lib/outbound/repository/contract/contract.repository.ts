import { Course, CourseCreate } from '@lib/models/course.model'

export interface CourseRepository {
  create(data: CourseCreate): Promise<Course>
}
