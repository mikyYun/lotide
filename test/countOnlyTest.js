const assert = require('chai').assert;
const countOnly = require('../countOnly')

describe('#countOnly', () => {
  it(`return { Fang: 2, Jason: 1 } if firstNames are:  ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], and given name with TRUE is: { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    assert.deepEqual(countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 })
  })
})