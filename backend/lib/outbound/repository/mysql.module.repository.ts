import { ModulePort } from '../module.port'
import database from '@lib/configs/database'
import { ModuleCreate, Modules } from '@lib/models/module.model'

export class MysqlModuleRepository implements ModulePort {
  async create(data: ModuleCreate): Promise<Modules> {
    const module: Modules = await database.modules.create({ data })
    return module
  }

  async update(id: number, data: ModuleCreate): Promise<Modules> {
    const module: Modules = await database.modules.update({ where: { id }, data })
    return module
  }

  async delete(id: number): Promise<void> {
    await database.modules.delete({ where: { id } })
  }

  async find(id: number): Promise<Modules | null> {
    const module: Modules | null = await database.modules.findUnique({ where: { id } })
    return module
  }

  async findAll(limit: number, page: number): Promise<Modules[]> {
    const modules: Modules[] = await database.modules.findMany({
      skip: (page - 1) * limit,
      take: limit,
    })
    return modules
  }
}
