const reduce = require('../reduce/001')

module.exports = (list) =>
  reduce((total) => (number) => total * number)(list)(1)
