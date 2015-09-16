'use strict';

const expect = require('chai').expect
const cons   = require('../list/cons')

describe('reduce', () => {
  context('version 001', () => {
    var reduce = require('./001')

    it('applies a function against an accumulator and each value in a list to reduce it to a single value', () => {
      var array = [1, 2, 3, 4]
      var subject = reduce((acc) => (value) => acc + value)(array)(0)

      expect(subject).to.eq(10)
    })
  })

  context('with cons cells', () => {
    var reduce = require('./002')

    it('applies a function against an accumulator and each value in a list to reduce it to a single value', () => {
      var list = cons(1)(cons(2)(cons(3)(cons(4)())))
      var subject = reduce((acc) => (value) => acc + value)(list)(0)

      expect(subject).to.eq(10)
    })
  })
})
