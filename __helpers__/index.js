const constants = {
  ERROR_CONNECTION: 'ERROR_CONNECTION',
  ERROR_500: 'ERROR_500'
}

module.exports = {
  resetServerConnection: () => {
    delete process.env.HTTP_TEST_BEHAVIOUR
  },
  generateServerConnectionError: () => {
    process.env.HTTP_TEST_BEHAVIOUR = constants.ERROR_CONNECTION
  },
  generateServerInternalError: () => {
    process.env.HTTP_TEST_BEHAVIOUR = constants.ERROR_500
  },
  hasServerConnectionError: () => process.env.HTTP_TEST_BEHAVIOUR === constants.ERROR_CONNECTION,
  hasServerInternalError: () => process.env.HTTP_TEST_BEHAVIOUR === constants.ERROR_500
}
