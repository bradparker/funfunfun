'use strict';

const expect = require('chai').expect
const show   = require('../array/show')

describe('reverse', () => {
  ['001'].forEach((version) => {
    context(`version ${version}`, () => {
      var reverse = require(`./${version}`)

      it('takes a list, and returns a new list which is the reverse of the original list', () => {
        var subject = show(reverse([1, 2, 3, 4]))

        expect(subject).to.eq('4, 3, 2, 1')
      })
    })
  })
})
