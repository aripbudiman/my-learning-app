import { CourseCreate, CourseResponse, CourseWithBatchResponse, Query } from '@models/course.model'
import { ValidationError } from 'elysia'

export interface CourseSvc {
    createCourse(data: CourseCreate): Promise<CourseResponse | ValidationError>
    updateCourse(id: number, data: CourseCreate): Promise<CourseResponse | Error>
    deleteCourse(id: number): Promise<string | Error>
    getCourse(id: number): Promise<CourseResponse | Error | null>
    getAllCourses(query: Query): Promise<CourseResponse[]>
    getCourseWithBatch(query: Query): Promise<CourseWithBatchResponse[] | Error | null>
}
