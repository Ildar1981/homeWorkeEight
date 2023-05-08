import supertest from 'supertest'

import config from '../user/credentials'
const { baseUrl } = config

let token = ''


const user = {
  
  login: (payload) => {
    
    return supertest(baseUrl)
      .post('/api/v1/auth/access_token')
      .set('Accept', 'application/json')
      .send({username : payload.username, password : payload.password})
  },
  
  
  async getAuthToken() {
    const payload = config.credentials

    const res = await this.login(payload) // this = user. Аналогичен await user.login(payload)

    return res.body.token
  },

  
  async getAuthTokenWithCache() {
    if (token) {
      return token
    }

    token = await this.getAuthToken()

    return token
  },

  user: (token) => {
    return supertest(baseUrl)
      .get('/api/v1/auth/users/settings')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send()
  }
}

module.exports ={
    user

}


