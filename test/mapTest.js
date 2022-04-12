const assert = require('chai').assert;
const map = require('../map')
const words = ["ground", "control", "to", "major", "tom"];
const secondWords = ["Hi", "First Letter", "let's find", 123456, "9Test"];

describe('#map', () => {
  it(`return first character([ 'g', 'c', 't', 'm', 't' ]) of each element from Array(["ground", "control", "to", "major", "tom"])`, () => {
    assert.deepEqual(map(words, (word) => word[0]), [ 'g', 'c', 't', 'm', 't' ])
  })
  it(`return first character([ 'H', 'F', 'l', 1, 9 ]) of each element from Array(["Hi", "First Letter", "let's find", 123456, "9Test"])`, () => {
    assert.deepEqual(map(secondWords, (secondWord) => secondWord[0]), [ 'H', 'F', 'l', 1, '9' ])
  })
})
