const isEmpty = require('../isEmpty')
const cons    = require('../cons')
const head    = require('../head')
const tail    = require('../tail')
const show    = require('../show')

const concat = (list1) => (list2) => {
  if (isEmpty(list1)) return list2

  return cons(head(list1))
             (concat(tail(list1))(list2))
}

module.exports = concat
