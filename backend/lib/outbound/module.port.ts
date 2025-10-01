import { Modules, ModuleCreate } from '@models/module.model'
export interface ModulePort {
    create(data: ModuleCreate): Promise<Modules>
    update(id: number, data: ModuleCreate): Promise<Modules>
    delete(id: number): Promise<void>
    find(id: number): Promise<Modules | null>
    findAll(limit: number, page: number): Promise<Modules[]>
    count(): Promise<number>
}
