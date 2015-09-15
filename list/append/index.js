const isEmpty = require('../isEmpty')
const cons    = require('../cons')
const head    = require('../head')
const tail    = require('../tail')

const append = (list) => (item) => {
  if (isEmpty(list)) return cons(item)()

  return cons(head(list))
             (append(tail(list))(item))
}

module.exports = append
