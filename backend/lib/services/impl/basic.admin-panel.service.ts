import { AdminPanelSvc } from '@lib/services/contract/admin-panel.service'
import { CoursePort } from '@lib/outbound/course.port'
import { ModulePort } from '@lib/outbound/module.port'
import { LessonPort } from '@lib/outbound/lesson.port'

export class BasicAdminPanelService implements AdminPanelSvc {
    constructor(
        private coursePort: CoursePort,
        private modulePort: ModulePort,
        private lessonPort: LessonPort
    ) {}

    async getOverviewData(): Promise<{ name: string; value: number }[]> {
        const courseCount = await this.coursePort.count()
        const moduleCount = await this.modulePort.count()
        const lessonCount = await this.lessonPort.count()
        return [
            { name: 'Courses', value: courseCount },
            { name: 'Modules', value: moduleCount },
            { name: 'Lessons', value: lessonCount },
        ]
    }
}
