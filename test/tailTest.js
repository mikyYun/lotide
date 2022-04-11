const assert = require('chai').assert;
const tail = require('../tail.js')

describe('#tail', () => {
  it(`return all Array buy head["Lighthouse", "Labs"] from the array ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })
  it(`return all Array buy head[1, 2] from the array [1, 2, 3]`, () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3])
  })
  it(`return all Array buy head[1] from the array [1, 2]`, () => {
    assert.deepEqual(tail([1, 2]), [2])
  })
  it(`return all Array buy head[] from the array [1]`, () => {
    assert.deepEqual(tail([1]), [])
  })
})

