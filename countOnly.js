const countOnly = function (allItems, itemsToCount) {
  console.log(itemsToCount['Jason']);
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item] === true && item in itemsToCount) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  console.log(result);
  return result;
};

module.exports = countOnly;