import { Course, CourseCreate } from '../../models/course.model'

export interface CourseSvc {
  create(data: CourseCreate): Promise<Course>
}
