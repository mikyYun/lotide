const takeUntil = function (array, callback) {
  // ...
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return result;
    }
    result.push(array[i]);
  };
  // console.log(result)
  return result;
};
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(takeUntil(data2, x => x === ','));
module.exports = takeUntil;