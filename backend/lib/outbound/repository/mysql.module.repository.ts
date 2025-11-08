import { ModulePort } from '../module.port'
import database from '@lib/configs/database'
import { ModuleRepositoryCreate, ModuleRepository } from '@lib/models/module.model'
import { SelectModules } from '@lib/models/module.model'

export class MysqlModuleRepository implements ModulePort {
    async create(data: ModuleRepositoryCreate): Promise<ModuleRepository> {
        const module = await database.modules.create({ data })
        return module
    }

    async update(id: number, data: ModuleRepositoryCreate): Promise<ModuleRepository> {
        const module = await database.modules.update({ where: { id }, data })
        return module
    }

    async delete(id: number): Promise<void> {
        await database.modules.delete({ where: { id } })
    }

    async find(id: number): Promise<ModuleRepository | null> {
        const module = await database.modules.findUnique({ where: { id } })
        return module
    }

    async findAll(limit: number, page: number): Promise<ModuleRepository[]> {
        const modules = await database.modules.findMany({
            skip: (page - 1) * limit,
            take: limit,
        })
        return modules
    }

    async getByCourseId(courseId: number): Promise<SelectModules[]> {
        const modules = await database.modules.findMany({
            select: {
                id: true,
                batchTitle: true,
            },
            where: {
                courseId: courseId,
            },
        })
        return modules as unknown as SelectModules[]
    }

    async count(): Promise<number> {
        const count: number = await database.modules.count()
        return count
    }
}
