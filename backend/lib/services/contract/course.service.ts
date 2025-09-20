import { Course, CourseCreate, Query } from '@models/course.model'
import { ValidationError } from 'elysia'

export interface CourseSvc {
  createCourse(data: CourseCreate): Promise<Course | ValidationError>
  updateCourse(id: number, data: CourseCreate): Promise<Course | Error>
  deleteCourse(id: number): Promise<string | Error>
  getCourse(id: number): Promise<Course | Error | null>
  getAllCourses(query: Query): Promise<Course[]>
}
