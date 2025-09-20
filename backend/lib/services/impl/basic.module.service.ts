import { ModuleSvc } from '@lib/services/contract/module.service'
import { ModulePort } from '@lib/outbound/module.port'
import { ModuleCreate, Modules, QuerySchema } from '@models/module.model'

export class BasicModuleService implements ModuleSvc {
    constructor(private repository: ModulePort) {}

    async createModule(data: ModuleCreate): Promise<Modules> {
        return await this.repository.create(data)
    }

    async updateModule(id: number, data: ModuleCreate): Promise<Modules> {
        return await this.repository.update(id, data)
    }

    async deleteModule(id: number): Promise<string> {
        await this.repository.delete(id)
        return 'deleted'
    }

    async getModule(id: number): Promise<Modules | null> {
        return await this.repository.find(id)
    }

    async getAllModules(query: QuerySchema): Promise<Modules[]> {
        return await this.repository.findAll(query.limit, query.page)
    }
}
