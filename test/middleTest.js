const assert = require('chai').assert;
// const assertEqual = require('../assertEqual')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
// strictEqual -> strings...
// deepequal -> 
describe('#middle', () => {
  it('return [3, 4] if the array is [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
  it('return [5] in the array[1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])
  })
  it('return [2] in the array [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })
  it('return [] if the length of array is too short (less or equal than 2)', () => {
    assert.deepEqual(middle([1, 2]), [])
  })
  it('return [] if the length of array is too short (less or equal than 2)', () => {
    assert.deepEqual(middle([1]), [])
  })
  it(`return ['this is a middle'] value of the given array[1, "3", "HI", "this is a middle", "Bye", "3", ""]`, () => {
    assert.deepEqual(middle([1, "3", "HI", "this is a middle", "Bye", "3", ""]), ['this is a middle'])
  })
})

