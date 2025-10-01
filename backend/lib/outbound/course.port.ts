import { Course, CourseCreate } from '@lib/models/course.model'

export interface CoursePort {
    create(data: CourseCreate): Promise<Course>
    update(id: number, data: CourseCreate): Promise<Course>
    delete(id: number): Promise<void>
    find(id: number): Promise<Course | null>
    findAll(limit: number, page: number): Promise<Course[]>
    count(): Promise<number>
}
