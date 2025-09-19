import { Course, CourseCreate } from '../../model/course.model'

export interface CourseSvc {
  create(data: CourseCreate): Promise<Course>
}
