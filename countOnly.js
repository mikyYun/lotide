
const countOnly = function(allItems, itemsToCount) {
  console.log(itemsToCount['Jason'])  
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item] === true && item in itemsToCount) {
      if (result[item]) {
        result[item] ++;
      } else {
        result[item] = 1;
      }
    }
  }
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

module.exports = countOnly