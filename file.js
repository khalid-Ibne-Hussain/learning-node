const fs = require('fs');

// reading a file text synchronous way
const readText = fs.readFileSync('./texts/read.txt', 'utf-8'); // solving buffer issue use utf-8


// write a text
const writtenText = fs.writeFileSync('./texts/write.txt', readText + 'this is my written text')

// console.log(readText);
// console.log(writtenText);

// reading file text asynchronous way________

