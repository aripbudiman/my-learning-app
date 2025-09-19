import { app } from '../configs/server'

app.listen(7500)
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
