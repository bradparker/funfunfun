const reduce = require('../reduce/001')
const add = require('../utils/math/add')

module.exports = (list) =>
  reduce(add)(list)(0)
