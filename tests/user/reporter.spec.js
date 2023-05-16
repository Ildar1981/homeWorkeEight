import {Severity,  Status} from "jest-allure/dist/Reporter"
import supertest from "supertest"
import config from './config'
import {generateUser} from "../helper/generate-user"
beforeEach( () =>{
    reporter.addEnvironment('STAND','LOCAL')
    reporter.addLabel('test level','API')
    reporter.addEnvironment('URL', config.baseUrl)
})
describe('test 1', () =>{
    test('email verification send', () =>{

        reporter.description('after signup user got recived verify emil')
        reporter.epic('auth')
        reporter.feature('signup')
        
     })
    test('Should generate token for user by username and password', async () => {
        reporter.startStep('Create user')
        const user = generateUser()
        reporter(Status.Passed)

        reporter.startStep('Login as ${user.Username}')
        await supertest(config.baseUrl)
        .post('/api/v1/auth/access_token')
        .set('Accept', 'application/json')
        .send(user)

    reporter.endStep()


    reporter.startStep('Generate token')
    const response = await supertest(config.baseUrl)
        .post('account/v1/GenerateToken')
        .set('Accept', 'application/json')
        .send(user)

    reporter.endStep()
    })

    test('Login user', async () =>{
        reporter.severity(Severity.Critical)
    })
    test('email verification send', () =>{
        reporter.endStep(Status.Passed)
    })
})