const { sampleReport } = require('../__fixtures__')
const { hasServerConnectionError, hasServerInternalError } = require('../__helpers__')

module.exports = () => {
  if (hasServerConnectionError()) {
    /* eslint-disable-next-line prefer-promise-reject-errors */
    return Promise.reject({
      response: {
        text: () => Promise.resolve('Unexpected Error!')
      }
    })
  }

  if (hasServerInternalError()) {
    return Promise.resolve({
      ok: false,
      status: 500,
      statusText: 'Server Internal Error',
      text: () => Promise.resolve('Server Internal Error')
    })
  }

  return Promise.resolve({
    text: async () => sampleReport,
    ok: true
  })
}
