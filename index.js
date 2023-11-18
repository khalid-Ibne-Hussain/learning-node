// Local Module _________________
// const myModule = require('./local-1')
const { a, add } = require('./local-1');
const { a: a2, add: add2 } = require('./local-2'); //name alias

// console.log(myModule.add(2, 3));
console.log(add(2, 3));
console.log(add2(2, 3, 5));

// built-in-modules_________________
const path = require("path");
console.log(path.parse("/I:/P H L 2/learning-node/index.js"));
