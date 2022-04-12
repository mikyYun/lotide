const assert = require('chai').assert
const findKeyByValue = require('../findKeyByValue')
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  'comedy': "Brooklyn Nine-Nine",
  'drama': "The Wire",
};

describe('#findKeyByValue', () => {
  it(`return 'drama' if the Object includes 'The Wire' as a value`, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama')
  })
  it(`return 'undefined' if the Object not includes 'The '70s Show' as a value`, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  })
})

