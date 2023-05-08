import config from '../user/config'
import supertest from 'supertest'

async function login({ username, password }) {
    const res = await supertest(config.baseUrl)
        .post('/api/v1/auth/access_token')
        .set('Accept', 'application/json')
        .send({username,  password });

    return res;
}

async function loginFalse({ username_invalid, password_invalid }) {
    const res = await supertest(config.baseUrl)
        .post('/api/v1/auth/access_token')
        .set('Accept', 'application/json')
        .send({username_invalid ,  password_invalid });

    return res;
}

async function searchNapr(){
    const res = await login()

}




module.exports ={
    login,
    loginFalse
}