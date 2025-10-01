import { LessonCreate, Lessons } from '@lib/models/lesson.model'
import { LessonPort } from '@lib/outbound/lesson.port'
import database from '@lib/configs/database'

export class MysqlLessonRepository implements LessonPort {
    async create(data: LessonCreate): Promise<Lessons> {
        const lesson: Lessons = await database.lessons.create({ data })
        return lesson
    }

    async update(id: number, data: LessonCreate): Promise<Lessons> {
        const lesson: Lessons = await database.lessons.update({ where: { id }, data })
        return lesson
    }

    async delete(id: number): Promise<void> {
        await database.lessons.delete({ where: { id } })
    }

    async find(id: number): Promise<Lessons | null> {
        const lesson: Lessons | null = await database.lessons.findUnique({ where: { id } })
        return lesson
    }

    async findAll(limit: number, page: number): Promise<Lessons[]> {
        const lessons: Lessons[] = await database.lessons.findMany({
            skip: (page - 1) * limit,
            take: limit,
        })
        return lessons
    }

    async count(): Promise<number> {
        const count: number = await database.lessons.count()
        return count
    }
}
