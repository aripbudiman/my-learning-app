import { CoursePort } from '@lib/outbound/course.port'
import { ModulePort } from '@lib/outbound/module.port'
import { LessonPort } from '@lib/outbound/lesson.port'

import { CourseSvc } from '@lib/services/contract/course.service'
import { ModuleSvc } from '@lib/services/contract/module.service'
import { LessonSvc } from '@lib/services/contract/lesson.service'

import { MySqlCourseRepository } from '@lib/outbound/repository/mysql.course.repository'
import { MysqlModuleRepository } from '@lib/outbound/repository/mysql.module.repository'
import { MysqlLessonRepository } from '@lib/outbound/repository/mysql.lesson.repository'

import { BasicCourseService } from '@lib/services/impl/basic.course.service'
import { BasicModuleService } from '@lib/services/impl/basic.module.service'
import { BasicLessonService } from '@lib/services/impl/basic.lesson.service'

const courseRepository: CoursePort = new MySqlCourseRepository()
const moduleRepository: ModulePort = new MysqlModuleRepository()
const lessonRepository: LessonPort = new MysqlLessonRepository()

export const courseService: CourseSvc = new BasicCourseService(courseRepository)
export const moduleService: ModuleSvc = new BasicModuleService(moduleRepository)
export const lessonService: LessonSvc = new BasicLessonService(lessonRepository)
