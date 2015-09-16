const expect = require('chai').expect

const multiply = require('.')

describe('multiply(a)(b)', () => {
  it('multiplies two numbers', () => {
    expect(multiply(2)(4)).to.eq(8)
  })
})
