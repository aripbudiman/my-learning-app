import { Elysia, t } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
const app = new Elysia()
  .use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
    })
  )
  .use(swagger({
    path: '/api-docs',
    documentation: {
      info: {
        title: 'My Learning Platform API',
        version: '1.0.0'
      }
    }
  }))
   .get('/', () => 'Hello from Elysia Backend running on Bun! 🚀')
  .get('/api/health', () => ({ 
    status: 'OK', 
    runtime: 'Bun',
    timestamp: new Date().toISOString() 
  }))
  .get('/api/courses', () => [
    { id: 1, title: 'Introduction to Programming', duration: '4 weeks', instructor: 'John Doe' },
    { id: 2, title: 'Web Development Basics', duration: '6 weeks', instructor: 'Jane Smith' },
    { id: 3, title: 'Database Fundamentals', duration: '3 weeks', instructor: 'Bob Johnson' }
  ])
  .post('/api/courses', ({ body }) => {
    console.log('New course:', body)
    return { success: true, message: 'Course created successfully' }
  }, {
    body: t.Object({
      title: t.String(),
      duration: t.String(),
      instructor: t.String()
    })
  })
  .listen(7500)
  console.log(
  `🦊 Elysia is running at http://localhost:${app.server?.port}`
)
export type App = typeof app