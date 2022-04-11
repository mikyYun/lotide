const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, expectedKey) => {
  let result;
  let checkKeys = Object.keys(obj);
  // let checkValues = Object.values(obj);
  // console.log(obj[checkKeys[1]])
  for (let key of checkKeys) {
    // console.log(obj[key])
    // console.log(checkKeys)
    // console.log(checkValues)
    // console.log(key)
    // console.log(expectedKey)
    if (obj[key] === expectedKey) {
      result = key;
    }
    // else if (obj[key] !== expectedKey) {

    // }
  }
  console.log(result);
  return result;
};

const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
findKeyByValue(bestTVShowsByGenre, "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
