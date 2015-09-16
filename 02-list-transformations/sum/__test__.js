'use strict';

const expect = require('chai').expect

describe('sum', () => {
  ['001', '002'].forEach((version) => {
    context('version ' + version, () => {
      var sum = require(`./${version}`)

      it('computes the sum of a list of numbers', () => {
        var subject = sum([1, 2, 3, 4])
        expect(subject).to.eq(10)

        var subject = sum([1, 2, 3, 4, 5])
        expect(subject).to.eq(15)
      })
    })
  })
})
