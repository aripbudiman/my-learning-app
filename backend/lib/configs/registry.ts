import { CoursePort } from '@lib/outbound/course.port'
import { ModulePort } from '@lib/outbound/module.port'
import { CourseSvc } from '@lib/services/contract/course.service'
import { ModuleSvc } from '@lib/services/contract/module.service'

import { BasicCourseService } from '@lib/services/impl/basic.course.service'
import { MySqlCourseRepository } from '@lib/outbound/repository/mysql.course.repository'
import { BasicModuleService } from '@lib/services/impl/basic.module.service'
import { MysqlModuleRepository } from '@lib/outbound/repository/mysql.module.repository'

const courseRepository: CoursePort = new MySqlCourseRepository()
export const courseService: CourseSvc = new BasicCourseService(courseRepository)
const moduleRepository: ModulePort = new MysqlModuleRepository()
export const moduleService: ModuleSvc = new BasicModuleService(moduleRepository)
