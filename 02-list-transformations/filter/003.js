const append = require('../array/append')
const unit   = require('../array/unit')
const reduce = require('../reduce/001')

const appendIf = (predicate) => (list) => (elem) =>
  predicate(elem) ? append(list)(elem) : list

module.exports = (predicate) => (list) =>
  reduce(appendIf(predicate))(list)(unit)
