import { ModuleCreate, Modules, QuerySchema, SelectModules } from '@models/module.model'

export interface ModuleSvc {
    createModule(data: ModuleCreate): Promise<Modules>
    updateModule(id: number, data: ModuleCreate): Promise<Modules>
    deleteModule(id: number): Promise<string>
    getModule(id: number): Promise<Modules | null>
    getAllModules(query: QuerySchema): Promise<Modules[]>
    getMasterData(id: number): Promise<SelectModules[]>
}
