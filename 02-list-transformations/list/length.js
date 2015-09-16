const isEmpty = require('./isEmpty')
const tail = require('./tail')
const add = require('../../01-partial-functions/add')

const length = (list) => {
  if (isEmpty(list)) return 0

  return add(1)(length(tail(list)))
}
