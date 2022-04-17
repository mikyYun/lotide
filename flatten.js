const flatten = (arr) => {
  let newArr = [];
  arr.forEach((e, ind) => {
    if (typeof (e) !== 'number') {
      typeof (e).forEach((element, index) => {
        newArr.push(element);
      });
    } else {
      newArr.push(e);
    }
  });
  return newArr;
};

module.exports = flatten;