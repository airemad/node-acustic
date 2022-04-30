const debug = require('debug')('airemad-acustic')

const { downloadLastReport, parseReport, checkReportFormat } = require('./utils')

const getLastReport = async () => {
  debug('Requesting  the last report available has started')
  const { content: rawReport, hash, source, timestamp } = await downloadLastReport()
  const report = await parseReport(rawReport)
  checkReportFormat(report)
  debug('Requesting  the last report available has finished')
  return {
    data: report,
    hash,
    source,
    timestamp
  }
}

module.exports = {
  getLastReport
}
