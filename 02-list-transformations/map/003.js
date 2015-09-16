const isEmpty = require('../array/isEmpty')
const head    = require('../array/head')
const tail    = require('../array/tail')
const prepend = require('../array/prepend')

const map = (fun) => (list) => {
  if (isEmpty(list)) return list

  return prepend(fun(head(list)))
                (map(fun)(tail(list)))
}

module.exports = map
