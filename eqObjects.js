const eqArrays = require('./eqArrays');
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let values1 = Object.values(object1);
  let values2 = Object.values(object2);
  let lengthChecker = () => {
    if (keys1.length === keys2.length) {
      return true;
    } else {
      return false;
    }
  };
  let result;
  if (lengthChecker() === true) {
    for (let ky of keys1) {
      if (eqArrays(keys1, keys2) && eqArrays(values1, values2)) {
        result = true;
        return true;
      } else {
        return false;
      }
    }
    return false;
  } else {
    result = false;
    return false;
  }
};
module.exports = eqObjects