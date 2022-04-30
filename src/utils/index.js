const { downloadLastReport } = require('./download')
const { parseReport, getPeriod } = require('./parser')
const { generateHash, checkReportFormat } = require('./validation')

module.exports = { downloadLastReport, parseReport, generateHash, checkReportFormat, getPeriod }
