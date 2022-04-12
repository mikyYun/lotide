const assertEqual = require('./assertEqual.js')

const tail = function(test) {
  let result = [];
  if (test.length < 2) {
    return result
  }
  for (let i = 1; i < test.length; i ++) {
    result.push(test[i]);
  }
  return result
};


module.exports = tail