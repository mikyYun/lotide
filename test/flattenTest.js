const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')
const flatten = require('../flatten')
describe('#flatten', () => {
  it(`return all elements from diffrent level of arrays[1, 2, [3, 4], 5, [6]] on the same level[ 1, 2, 3, 4, 5, 6 ]`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ])
  })
})

flatten([1, 2, [3, 4], 5, [6]]);