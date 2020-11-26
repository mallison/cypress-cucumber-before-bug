import { Given } from 'cypress-cucumber-preprocessor/steps'

before(() => {
    // the rejected promise is standing in for a error during login or db seeding
    return Promise.reject(new Error('this causes cypress to hang'))
})

Given('I have a step', () => {
    console.log('step runs')
})