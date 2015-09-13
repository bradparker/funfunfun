const isEmpty = require('../array/isEmpty')
const head    = require('../array/head')
const tail    = require('../array/tail')
const prepend = require('../array/prepend')

const filter = (predicate) => (list) => {
  if (isEmpty(list)) return list

  if (predicate(head(list))) {
    return prepend(head(list))
                  (filter(predicate)
                         (tail(list)))
  } else {
    return filter(predicate)
                 (tail(list))
  }
}

module.exports = filter
