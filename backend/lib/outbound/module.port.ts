import { ModuleRepository, ModuleRepositoryCreate, SelectModules } from '@models/module.model'
export interface ModulePort {
    create(data: ModuleRepositoryCreate): Promise<ModuleRepository>
    update(id: number, data: ModuleRepositoryCreate): Promise<ModuleRepository>
    delete(id: number): Promise<void>
    find(id: number): Promise<ModuleRepository | null>
    findAll(limit: number, page: number): Promise<ModuleRepository[]>
    count(): Promise<number>
    getByCourseId(courseId: number): Promise<SelectModules[]>
}
