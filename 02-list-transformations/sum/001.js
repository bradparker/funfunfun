const isEmpty = require('../array/isEmpty')
const head    = require('../array/head')
const tail    = require('../array/tail')
const add     = require('../../01-partial-functions/add')

const sum = (list) => {
  if (isEmpty(list)) return 0

  return add(head(list))
            (sum(tail(list)))
}

module.exports = sum
