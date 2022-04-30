const { getLastReport } = require('../src')
const fixtures = require('../__fixtures__')

beforeAll(() => {
  jest.useFakeTimers('modern')
  jest.setSystemTime(new Date(2021, 10, 3))
})

afterAll(() => {
  jest.clearAllMocks()
})

describe('Acustic methods', () => {
  it('Should return a report', async () => {
    const report = await getLastReport()
    expect(report).toStrictEqual(fixtures.outputReport)
  })
})
