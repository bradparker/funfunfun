const append = require('../list/append')
const unit   = require('../list/unit')
const reduce = require('../reduce/002')

const appendIf = (predicate) => (list) => (elem) =>
  predicate(elem) ? append(list)(elem) : list

module.exports = (predicate) => (list) =>
  reduce(appendIf(predicate))(list)(unit)
