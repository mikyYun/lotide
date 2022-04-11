const assert = require('chai').assert;
const assertEqual = require('../assertEqual')

describe('#assertEqual', () => {
  it('returns false for different STRINGs(Lighthouse Labs, Bootcamp)', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false)
  })
  it('returns true for the same NUMBER(1, 1)', () => {
    assert.strictEqual(assertEqual(1, 1), true)
  })
  it(`returns false for the number but Number and String('11', 11)`, () => {
    assert.strictEqual(assertEqual(11, '11'), false)
  })
  it(`returns true for the STRING(number)s('11', '11')`, () => {
    assert.strictEqual(assertEqual('11', '11'), true)
  })
  it(`returns false for the different STRING(number)s('11', '33')`, () => {
    assert.strictEqual(assertEqual('11', '33'), false)
  })
  it(`returns false for the STRING(emoji)s("😁", "😜")`, () => {
    assert.strictEqual(assertEqual("😁", "😜"), false)
  })
  it(`returns true for the STRING(emoji)s("🐅", "🐅")`, () => {
    assert.strictEqual(assertEqual("🐅", "🐅"), true)
  })
})