import { app } from '@configs/app'

app.listen(7500)
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
