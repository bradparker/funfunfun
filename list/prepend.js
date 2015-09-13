const cons = require('./cons')

module.exports = (elem) => (list) =>
  cons(elem)(list)
