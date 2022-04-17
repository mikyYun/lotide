const takeUntil = function (array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return result;
    }
    result.push(array[i]);
  };
  return result;
};

module.exports = takeUntil;