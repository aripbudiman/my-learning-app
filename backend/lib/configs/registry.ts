import { BasicCourseService } from '@lib/services/impl/basic.course.service'
import { MySqlCourseRepository } from '@lib/outbound/repository/mysql.course.repository'
import { CoursePort } from '@lib/outbound/course.port'
import { CourseSvc } from '@lib/services/contract/course.service'

const courseRepository: CoursePort = new MySqlCourseRepository()
export const courseService: CourseSvc = new BasicCourseService(courseRepository)
