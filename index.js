// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head,
  tail,
  middle
};

// > _
// undefined
// > const _ = require('./index')
// undefined
// > _
// {
//   head: [Function: head],
//   tail: [Function: tail],
//   middle: [Function: middle]
// }
// > _.head
// [Function: head]
// > _.tail
// [Function: tail]
// > _.middle
// [Function: middle]
// > Object.values(_)
// [ [Function: head], [Function: tail], [Function: middle] ]