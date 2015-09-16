const expect = require('chai').expect

const add = require('.')

describe('add(a)(b)', () => {
  it('adds two numbers together', () => {
    expect(add(1)(2)).to.eq(3)
  })
})
