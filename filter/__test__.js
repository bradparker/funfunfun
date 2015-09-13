'use strict';

const expect = require('chai').expect

describe('filter', () => {
  context('with arrays', () => {
    var show = require('../array/show')
    var versions = ['001', '002', '003']

    versions.forEach((version) => {
      context(`version ${version}`, () => {
        var filter = require(`./${version}`)

        it('processes a list to produce a new list containing exactly those elements of the original list for which a given predicate returns true', () => {
          var subject = show(filter(a => a % 2 === 0)([1, 2, 3, 4]))
          expect(subject).to.eq('2, 4')

          var subject = show(filter(a => a === 'Woot')(['Horay', 'Woot']))
          expect(subject).to.eq('Woot')
        })
      })
    })
  })


  context('with cons cells', () => {
    var cons = require('../list/cons')
    var show = require('../list/show')
    var filter = require('./004')

    it('processes a list to produce a new list containing exactly those elements of the original list for which a given predicate returns true', () => {
      var list    = cons(1)(cons(2)(cons(3)(cons(4)())))
      var subject = show(filter(a => a % 2 === 0)(list))
      expect(subject).to.eq('2, 4')

      var list    = cons('Horay')(cons('Woot')())
      var subject = show(filter(a => a === 'Woot')(list))
      expect(subject).to.eq('Woot')
    })
  })
})
