module.exports = {
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    reporters: ['default', 'jest-allure'],
    testRunner: 'jest-jasmine2',
    setupFilesAfterEnv: [
    'jest-allure/dist/setup',
    ]
}
