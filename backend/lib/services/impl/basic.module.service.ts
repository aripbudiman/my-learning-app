import { ModuleSvc } from '@lib/services/contract/module.service'
import { ModulePort } from '@lib/outbound/module.port'
import { ModuleCreate, Modules, QuerySchema, ModuleRepositoryCreate, SelectModules } from '@models/module.model'
import { Decimal } from '@prisma/client/runtime/library'

export class BasicModuleService implements ModuleSvc {
    constructor(private repository: ModulePort) {}

    async createModule(data: ModuleCreate): Promise<Modules> {
        const moduleData: ModuleRepositoryCreate = {
            ...data,
            originalPrice: new Decimal(data.originalPrice),
            salePrice: new Decimal(data.salePrice),
        }
        const result = await this.repository.create(moduleData)
        return {
            ...result,
            originalPrice: result.originalPrice.toString(),
            salePrice: result.salePrice.toString(),
        }
    }

    async updateModule(id: number, data: ModuleCreate): Promise<Modules> {
        const moduleData: ModuleRepositoryCreate = {
            ...data,
            originalPrice: new Decimal(data.originalPrice),
            salePrice: new Decimal(data.salePrice),
        }
        const result = await this.repository.update(id, moduleData)
        return {
            ...result,
            originalPrice: result.originalPrice.toString(),
            salePrice: result.salePrice.toString(),
        }
    }

    async deleteModule(id: number): Promise<string> {
        await this.repository.delete(id)
        return 'deleted'
    }

    async getModule(id: number): Promise<Modules | null> {
        const data = await this.repository.find(id)
        if (!data) return null
        return {
            ...data,
            originalPrice: data.originalPrice.toString(),
            salePrice: data.salePrice.toString(),
        }
    }

    async getAllModules(query: QuerySchema): Promise<Modules[]> {
        const data = await this.repository.findAll(query.limit, query.page)
        return data.map((module) => ({
            ...module,
            originalPrice: module.originalPrice.toString(),
            salePrice: module.salePrice.toString(),
        }))
    }

    async getMasterData(id: number): Promise<SelectModules[]> {
        const data = await this.repository.getByCourseId(id)
        return data
    }
}
