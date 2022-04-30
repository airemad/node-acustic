const debug = require('debug')('airemad-acustic:download')

const fetch = require('node-fetch')
const { REPORT_SRC: url } = require('../constants')
const { generateHash } = require('./validation')

class HTTPResponseError extends Error {
  constructor (response, ...args) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args)
    this.response = response
  }
}

const checkStatus = response => {
  debug('Checking response status code')
  if (response.ok) {
    return response
  }
  throw new HTTPResponseError(response)
}

const downloadLastReport = async () => {
  debug('Download process has started')
  try {
    const timestamp = new Date().getTime()
    const response = await fetch(url)
    checkStatus(response)
    const content = await response.text()
    const hash = generateHash(content)
    debug('Download process has finished sucesfully')
    return { content, hash, source: url, timestamp }
  } catch (error) {
    debug('Download process has generated an error')
    const errorBody = await error.response.text()
    return Promise.reject(errorBody)
  }
}

module.exports = { downloadLastReport }
