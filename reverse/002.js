const reduce  = require('../reduce/002')
const prepend = require('../list/prepend')
const unit    = require('../list/unit')

module.exports = (list) =>
  reduce((newList) => (elem) => prepend(elem)(newList))(list)(unit)
