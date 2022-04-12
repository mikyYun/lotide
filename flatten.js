const flatten = (arr) => {
  let newArr = [];
  arr.forEach((e, ind) => {
    if (typeof(e) !== 'number') {
      typeof(e).forEach((element, index) => {
        newArr.push(element);
      });
    } else {
      newArr.push(e);
    }
  });
  return newArr;
};
flatten([1, 2, [3, 4], 5, [6]]);

module.exports = flatten