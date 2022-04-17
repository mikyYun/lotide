const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (typeof item === 'number') {

      results.push(Number(item.toString()[0]));
    } else {
      results.push(callback(item));
    }
  }
  return results;
};
module.exports = map;