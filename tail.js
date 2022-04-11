const tail = function(test) {
  let result = [];
  for (let i = 1; i < test.length; i ++) {
    result.push(test[i]);
  }
  console.log(result);
};
tail([1, 2, 3, 4, 5, 6, 7]);
tail(["HI", "NEXT", "LAST"]);
tail([1, "string", "number", "who am I"]);

module.exports = tail