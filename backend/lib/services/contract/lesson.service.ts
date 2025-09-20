import { Lessons, LessonCreate, Query } from '@models/lesson.model'

export interface LessonSvc {
    createLesson(data: LessonCreate): Promise<Lessons>
    updateLesson(id: number, data: LessonCreate): Promise<Lessons>
    deleteLesson(id: number): Promise<string>
    getLessonById(id: number): Promise<Lessons | null>
    getAllLessons(query: Query): Promise<Lessons[]>
}
