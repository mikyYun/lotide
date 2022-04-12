const assert = require('chai').assert
const eqObjects = require('../eqObjects')

describe('#eqObjects', () => {
  it(`return ✔✔TRUE✔✔ if two Objects { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 } are equal`, () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
  }),
  it(`return ❓❓FALSE❓❓ if two Objects { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 } are different`, () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
  }),
  it(`return ❓❓FALSE❓❓ if two Objects { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 } are different`, () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)
  })
})
