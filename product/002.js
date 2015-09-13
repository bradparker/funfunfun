const reduce = require('../reduce/001')
const multiply = require('../utils/math/multiply')

module.exports = (list) =>
  reduce(multiply)(list)(1)
