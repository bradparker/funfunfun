const cons = require('../list/cons')
const tail = require('../list/tail')
const unit = require('../list/unit')
const concat = require('../list/concat')

const reduce = require('../reduce/002')

const intersperse = (newElem) => (list) =>
  tail(reduce((newList) => (elem) => concat(newList)(cons(newElem)(cons(elem)())))
      (list)
      (unit))

module.exports = intersperse
