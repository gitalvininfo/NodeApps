// const fs = require('fs'); 
// fs.read
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/write.txt', `I am write function ${first}, ${second}`, {flag: 'a'});

console.log(first, second)