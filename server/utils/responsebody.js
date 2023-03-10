const errorResponseBody = {
  err: {},
  data: {},
  message: 'Something went wrong, cannot process the request',
  success: false
}

const successResponseBody = {
  data: {},
  message: 'Successfully processed the request',
  success: true
}

module.exports = {
  successResponseBody,
  errorResponseBody
}