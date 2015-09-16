const reduce = require('../reduce/001')
const multiply = require('../../01-partial-functions/multiply')

module.exports = (list) =>
  reduce(multiply)(list)(1)
