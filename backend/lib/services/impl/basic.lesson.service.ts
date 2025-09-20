import { LessonSvc } from '@lib/services/contract/lesson.service'
import { LessonCreate, Lessons, Query } from '@models/lesson.model'
import { LessonPort } from '@lib/outbound/lesson.port'

export class BasicLessonService implements LessonSvc {
    constructor(private repository: LessonPort) {}

    async createLesson(data: LessonCreate): Promise<Lessons> {
        return await this.repository.create(data)
    }

    async updateLesson(id: number, data: LessonCreate): Promise<Lessons> {
        return await this.repository.update(id, data)
    }

    async deleteLesson(id: number): Promise<string> {
        await this.repository.delete(id)
        return 'deleted'
    }

    async getLessonById(id: number): Promise<Lessons | null> {
        return await this.repository.find(id)
    }

    async getAllLessons(query: Query): Promise<Lessons[]> {
        const data = await this.repository.findAll(query.limit, query.page)
        return data
    }
}
