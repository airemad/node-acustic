const { downloadLastReport } = require('../../src/utils')
const { REPORT_SRC } = require('../../src/constants')
const fixtures = require('../../__fixtures__')
const { resetServerConnection, generateServerConnectionError, generateServerInternalError } = require('../../__helpers__')

beforeAll(() => {
  jest.useFakeTimers('modern')
  jest.setSystemTime(new Date(2021, 10, 3))
})

afterAll(() => {
  jest.clearAllMocks()
  resetServerConnection()
})

describe('Utils: Download', () => {
  it('Should download a report', async () => {
    const { content, hash, source, timestamp } = await downloadLastReport()
    expect(timestamp).toBe(fixtures.mokedTimestamp)
    expect(source).toBe(REPORT_SRC)
    expect(content).toBe(fixtures.sampleReport)
    expect(hash).toBe(fixtures.sampleReportHash)
  })

  it('Should throw an error if the resource is not available', async () => {
    generateServerConnectionError()
    return expect(downloadLastReport()).rejects.toMatch('Unexpected Error!')
  })
  it('Should throw an error if the HTTP status code is not the expected', async () => {
    generateServerInternalError()
    return expect(downloadLastReport()).rejects.toMatch('Server Internal Error')
  })
})
