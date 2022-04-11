const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

describe('#eqArrays', () => {
  it('return true when check same ARRAY([1, 2, 3],[1, 2, 3])', () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1, 2, 3]), true)
  })
  it('return false when check two ARRAYS with same length but only a element is different', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
  })
  it('return false when check two ARRAYS with same length but only the type of an element is different', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
  })
  it('return true when check two same STRING(Hi, Hi)', () => {
    assert.strictEqual(eqArrays("HI", "HI"), true)
  })
  it('return true when check nested arrays and both are same', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
  })
  it('return false when check nested arrays and elements are different', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
  })

})
