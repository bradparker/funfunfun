const head    = require('../array/head')
const tail    = require('../array/tail')
const prepend = require('../array/prepend')
const isEmpty = require('../array/isEmpty')

const reduce = (func) => (list) => (accumulator) => {
  if (isEmpty(list)) return accumulator

  return reduce(func)
               (tail(list))
               (func(accumulator)
                    (head(list)))
}

module.exports = reduce
