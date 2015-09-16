const reduce  = require('../reduce/001')
const prepend = require('../array/prepend')
const unit    = require('../array/unit')

module.exports = (list) =>
  reduce((newList) => (elem) => prepend(elem)(newList))(list)(unit)
