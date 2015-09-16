'use strict';

const expect = require('chai').expect

describe('product', () => {
  ['001', '002'].forEach((version) => {
    context('version ' + version, () => {
      var product = require(`./${version}`)

      it('computes the product of a list of numbers', () => {
        var subject = product([1, 2, 3, 4])
        expect(subject).to.eq(24)

        var subject = product([1, 2, 3, 4, 5])
        expect(subject).to.eq(120)
      })
    })
  })
})
