const assertEqual = require('./assertEqual.js')

const tail = function(test) {
  let result = [];
  for (let i = 1; i < test.length; i ++) {
    result.push(test[i]);
  }
  console.log(result);
};


module.exports = tail