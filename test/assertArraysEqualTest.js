const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')
const assertEqual = require('../assertEqual')

describe('#assertArraysEqual', () => {
  it('returns 🆗🆗🆗true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true)
  })
  it('returns 💥💥💥false for [1, 2, 3] and [3, 2, 1]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [2, 3, 1]), false)
  })
  it('returns 🆗🆗🆗true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true)
  })
  it('returns 💥💥💥false for ["1", "2", "3"] and ["1", "2", 3]', () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false)
  })
  it('returns 🆗🆗🆗true for "HI" and "HI"', () => {
    assert.strictEqual(assertArraysEqual("HI", "HI"), true)
  })
})
