const head    = require('../list/head')
const tail    = require('../list/tail')
const prepend = require('../list/prepend')
const isEmpty = require('../list/isEmpty')

const reduce = (func) => (list) => (accumulator) => {
  if (isEmpty(list)) return accumulator

  return reduce(func)
               (tail(list))
               (func(accumulator)
                    (head(list)))
}

module.exports = reduce
