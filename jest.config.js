
const { defaults } = require('jest-config')

// To prevent problems related to timezones (e.g. date formating)
process.env.TZ = 'GMT'

module.exports = {
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    'src/'
  ],
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js'
  ]
}
