'use strict';

const expect = require('chai').expect

const show = require('../show')
const cons = require('../cons')
const append = require('.')

describe('append', () => {
  it('adds item to end of list', () => {
    var list = cons(1)(cons(2)())
    var item = 3

    var subject = show(append(list)(item))

    expect(subject).to.eq('1, 2, 3')
  })
})
