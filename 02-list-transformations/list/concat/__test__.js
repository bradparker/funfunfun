const expect = require('chai').expect

const cons = require('../cons')
const show = require('../show')
const concat = require('.')

describe('concat', () => {
  it('add two lists', () => {
    var list1 = cons(1)()
    var list2 = cons(2)()

    var subject = show(concat(list1)(list2))

    expect(subject).to.eq('1, 2')
  })
})
