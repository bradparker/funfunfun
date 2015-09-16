const reduce = require('../reduce/001')
const append = require('../array/append')
const unit   = require('../array/unit')

module.exports = (fun) => (list) =>
  reduce((newList) => (elem) => append(newList)(fun(elem)))
        (list)
        (unit)
