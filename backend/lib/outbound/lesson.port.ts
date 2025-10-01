import { Lessons, LessonCreate } from '@models/lesson.model'

export interface LessonPort {
    create(data: LessonCreate): Promise<Lessons>
    update(id: number, data: LessonCreate): Promise<Lessons>
    delete(id: number): Promise<void>
    find(id: number): Promise<Lessons | null>
    findAll(limit: number, page: number): Promise<Lessons[]>
    count(): Promise<number>
}
