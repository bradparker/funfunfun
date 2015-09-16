const reduce = require('../reduce/002')
const intersperse = require('../intersperse/001')

module.exports = (list) =>
  reduce((a) => (b) => `${a}${b}`)(intersperse(', ')(list))('')
