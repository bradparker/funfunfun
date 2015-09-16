'use strict';

const expect = require('chai').expect

describe('map', () => {
  context('with arrays', () => {
    var show = require('../array/show')
    var versions = ['001', '002', '003', '004']

    versions.forEach((version) => {
      context(`version ${version}`, () => {
        var map = require(`./${version}`)

        it('applies a given function to each element of a list, returning a list of results', () => {
          var subject = show(map(a => a * 2)([1, 2, 3, 4]))
          expect(subject).to.eq('2, 4, 6, 8')

          var subject = show(map(a => `${a}!`)(['Horay', 'Woot']))
          expect(subject).to.eq('Horay!, Woot!')
        })
      })
    })
  })

  context('with cons cells', () => {
    var cons = require('../list/cons')
    var show = require('../list/show')
    var map  = require('./005')

    it('applies a given function to each element of a list, returning a list of results', () => {
      var list    = cons(1)(cons(2)(cons(3)(cons(4)())))
      var subject = show(map(a => a * 2)(list))
      expect(subject).to.eq('2, 4, 6, 8')

      var list    = cons('Horay')(cons('Woot')())
      var subject = show(map(a => `${a}!`)(list))
      expect(subject).to.eq('Horay!, Woot!')
    })
  })
})
