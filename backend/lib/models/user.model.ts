import { Roles } from '@prisma/client'

export interface Users {
    id: string
    name: string
    email: string
    passwordHash: string
    role: Roles
    createdAt: Date
    updatedAt: Date
}
