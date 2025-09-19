import { BasicCourseService } from '@lib/services/impl/basic.course.service'
import { MySqlCourseRepository } from '@lib/outbound/repository/impl/mysql.course.repository'

const courseRepository = new MySqlCourseRepository()
export const courseService = new BasicCourseService(courseRepository)
