const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👀🤢🤢👀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👍👍👍👍Assertion Failed:  ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // console.log(firstNames)   
  // console.log(Object.keys(itemsToCount))
  // console.log(Object.values(itemsToCount))
  // console.log(Object.keys(itemsToCount))
  // console.log(Object.values(itemsToCount))
  console.log(itemsToCount['Jason'])  
  const result = {};
  for (const item of allItems) {
    // if ('item' in itemsToCount ) {
      // console.log(item);
      // let tOrF = Object.keys(itemsToCount).find(item => itemsToCount[item])
      // console.log(tOrF)
    if (itemsToCount[item] === true && item in itemsToCount) {
      if (result[item]) {
        result[item] ++;
      } else {
        result[item] = 1;
      }
    }
  }
  // }
  console.log(result);
  return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);