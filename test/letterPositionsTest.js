const assert = require('chai').assert;
const letterPositions = require('../letterPositions')

describe('#letterPosition', () => {
  it(`return {'h': 1, 'e': 1, 'l': 2, 'o': 1} if letter is 'hello'`, () => {
    assert.deepEqual(letterPositions('hello'), {'h': 1, 'e': 1, 'l': 2, 'o': 1})
  }),
  it(`return { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } if letter is 'lighthouse in the house'`, () => {
    assert.deepEqual(letterPositions('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 })
  })
})
