const reduce = require('../reduce/001')
const add = require('../../01-partial-functions/add')

module.exports = (list) =>
  reduce(add)(list)(0)
