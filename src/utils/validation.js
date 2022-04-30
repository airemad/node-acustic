const debug = require('debug')('airemad-acustic:validation')
const crypto = require('crypto')
const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const schema = require('../schema.json')

const ajv = new Ajv()
addFormats(ajv)

const generateHash = (data) => crypto.createHash('md5').update(data).digest('hex')

const checkReportFormat = (report) => {
  debug('Checking Report format integrity has started')
  const validate = ajv.compile(schema)
  if (!validate(report)) {
    debug('The integrity has failed!')
    throw new Error('The Report is corrupted')
  }
  debug('Checking Report format integrity has finished')
}

module.exports = {
  generateHash,
  checkReportFormat
}
