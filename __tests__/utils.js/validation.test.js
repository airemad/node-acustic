const { generateHash, checkReportFormat } = require('../../src/utils')
const fixtures = require('../../__fixtures__')

describe('Utils: Validation', () => {
  it('Should check the report', () => {
    expect(() => checkReportFormat(fixtures.outputReport.data)).not.toThrowError()
  })

  it('Should throw an error if the report is not valid', () => {
    expect(() => checkReportFormat(undefined)).toThrowError('The Report is corrupted')
  })

  it('Should generate a valid hash', () => {
    expect(generateHash(fixtures.sampleReport)).toBe(fixtures.sampleReportHash)
  })
})
