const { parseReport, getPeriod } = require('../../src/utils')
const fixtures = require('../../__fixtures__')

describe('Utils: Parser', () => {
  it('Should parse the report', async () => {
    const report = await parseReport(fixtures.sampleReport)
    expect(report).toStrictEqual(fixtures.outputReport.data)
  })

  it('Should parse the period properly', () => {
    expect(getPeriod('INVENTED')).toBe(undefined)
    expect(getPeriod('T')).toBe('total')
    expect(getPeriod('D')).toBe('day')
    expect(getPeriod('E')).toBe('evening')
    expect(getPeriod('N')).toBe('night')
  })
})
