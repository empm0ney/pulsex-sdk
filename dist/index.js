
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pulsex-sdk.cjs.production.min.js')
} else {
  module.exports = require('./pulsex-sdk.cjs.development.js')
}
