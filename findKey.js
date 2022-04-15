const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👍👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👀🤢🤢👀Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const findKey = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const checkKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

console.log(checkKey(findKey, (x) => x.stars === 2));
assertEqual(
  checkKey(findKey, (x) => x.stars === 2),
  "noma"
);
