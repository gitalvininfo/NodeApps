// const sayHi = (name) => {
//     console.log(name);
// }
// // sayHi("John");

const _ = require('lodash');

const items = [1, [2, [3, 4]]];

const newItems = _.flattenDeep(items);

console.log(newItems);


