const assert = require('chai').assert
const takeUntil = require('../takeUntil')
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe('#takeUntil', () => {
  it(`return [ 1, 2, 5, 7, 2 ] if data is [1, 2, 5, 7, 2, -1, 2, 4, 5]`, () => {
    assert.deepEqual(takeUntil(data1, x => x < 0),  [ 1, 2, 5, 7, 2 ])
  }),
  it(`return ['I've', 'been', 'to', 'Hollywood'] if data is ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', "to", "Redwood"]`, () => {
    assert.deepEqual(takeUntil(data2, x => x === ','),  ['I\'ve', 'been', 'to', 'Hollywood'])
  })
})

