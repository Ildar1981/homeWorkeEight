
import user from "../helper/createNapr"

describe('user', () => {
    describe('POST /api/v1/auth/access_token', () => {
        test('Авторизация должна проходить успешно с правильным логином и паролем', async () => {

            const input = { username: 'sbptd', password: 'sbptd_admin' }

            const res = await user.login(input)


            expect(res.status).toEqual(200);
            expect(typeof res.body.token).toEqual('string')

        })

        test('Авторизация должна возвращать статус с кодом 400 ошибки если логин неверный', async () => {
            const res = await user.login({ username: 'demo1', password: 'sbptd_admin' })

            expect(res.status).toEqual(400);

            expect(res.body.messages[0].message).toEqual('Пользователь с такими логином и паролем не найден.')
        })
    })

    test('Авторизация должна возвращать статус с кодом 400 ошибки если пароль неверный', async () => {
        const res = await user.login({ username: 'sbptd', password: 'demo1' })


        expect(res.status).toEqual(400);

        expect(res.body).toEqual({
            messages: [
                {
                    message: "Пользователь с такими логином и паролем не найден.",
                    message_details: "ошибка запроса",
                    error_type: "api error",
                    field: null
                }
            ]
        });
    })
})

test('Авторизация должна возвращать статус с кодом ошибки 400 если данных нет', async () => {
    const res = await user.login({})

    expect(res.status).toEqual(400);
})





describe('POST /api/v1/auth/access_token', () => {
    test('Должен отдавать информацию о пользователе', async () => {
        const token = await user.getAuthToken()
        const res = await user.user(token)

        expect(res.status).toEqual(200);
    })
})
