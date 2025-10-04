import { Course, CourseCreate, Query, CourseResponse } from '@models/course.model'
import { ValidationError } from 'elysia'

export interface CourseSvc {
    createCourse(data: CourseCreate): Promise<Course | ValidationError>
    updateCourse(id: number, data: CourseCreate): Promise<Course | Error>
    deleteCourse(id: number): Promise<string | Error>
    getCourse(id: number): Promise<CourseResponse | Error | null>
    getAllCourses(query: Query): Promise<CourseResponse[]>
}
