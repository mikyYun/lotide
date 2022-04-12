const findKeyByValue = (obj, expectedValue) => {
  let result;
  let checkKeys = Object.keys(obj);
  for (let key of checkKeys) {
    if (obj[key] === expectedValue) {
      result = key;
      // console.log(result);
      // console.log(typeof result)
      return result
    }
  }
};

const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
// findKeyByValue(bestTVShowsByGenre, "The Wire");
// findKeyByValue(bestTVShowsByGenre, "That '70s Show");

module.exports = findKeyByValue;