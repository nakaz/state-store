import { should, expect } from 'chai';
import Counter from '../index.js';

should();

describe('Counter', () => {
  let counter

  beforeEach(() => {
    counter = new Counter
  })

  it ('should have a property, store, a key/value map', () => {
    counter.should.have.property('store')
    counter.store.should.be.a('map')
  })

  describe('Method: resetStore', () => {
    it('should have a method resetStore', () => {
      counter.resetStore.should.be.a('function')
    })

    it('should reset store', () => {
      counter.store.a = 1
      counter.resetStore()
      counter.store.should.deep.equal({})
    })
  })

  describe('Method: increment', () => {
    it ('should have a method, increment', () => {
      counter.increment.should.be.a('function')
    })

    it ('should increment a key value', () => {
      counter.increment('a')
      counter.store.get('a').should.equal(1)
    })

    it('should increment a key value many times', () => {
      counter.resetStore()
      counter.increment('a')
      counter.increment('a')
      counter.increment('a')
      counter.store.get('a').should.deep.equal(3)
    })
  })

  describe('Method: decrement', () => {
    it('should have method, decrement', () => {
      counter.decrement.should.be.a('function')
    })

    it('should decrement a key value', () => {
      counter.increment('a')
      counter.increment('a')
      counter.decrement('a')
      counter.store.get('a').should.deep.equal(1)
    })
  })
})

