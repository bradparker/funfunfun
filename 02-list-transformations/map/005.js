const reduce = require('../reduce/002')
const append = require('../list/append')
const unit   = require('../list/unit')

module.exports = (fun) => (list) =>
  reduce((newList) => (elem) => append(newList)(fun(elem)))
        (list)
        (unit)
