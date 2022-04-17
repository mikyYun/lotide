const findKeyByValue = (obj, expectedValue) => {
  let result;
  let checkKeys = Object.keys(obj);
  for (let key of checkKeys) {
    if (obj[key] === expectedValue) {
      result = key;
      // console.log(result);
      // console.log(typeof result)
      return result;
    }
  }
};

module.exports = findKeyByValue;