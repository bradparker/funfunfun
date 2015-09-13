const cons = require('../list/cons')
const head = require('../list/head')
const tail = require('../list/tail')

const reduce = require('../reduce/002')
const reverse = require('../reverse/002')

const intersperse = (newElem) => (list) =>
  reverse(tail(reduce((newList) => (elem) => cons(newElem)(cons(elem)(newList)))(list)()))

module.exports = intersperse
