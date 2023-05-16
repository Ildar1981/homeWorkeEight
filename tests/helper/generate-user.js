import { faker } from '@faker-js/faker'

export function generateUser(opts) {
    return {
        userName: faker.internet.userName(),
        password: opts?.password ?? faker.internet.password(32, false, /[a-zA-Z8-9|@#$%^&*]/)
    }
}