import { Course, CourseCreate } from '@lib/models/course.model'

export interface CourseRepository {
  create(data: CourseCreate): Promise<Course>
  update(id: number, data: CourseCreate): Promise<Course>
  delete(id: number): Promise<void>
  find(id: number): Promise<Course>
  findAll(): Promise<Course[]>
}
