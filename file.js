const fs = require('fs');

// reading a file text synchronous way
const readText = fs.readFileSync('./texts/read.txt', 'utf-8'); // solving buffer issue use utf-8


// write a text
const writtenText = fs.writeFileSync('./texts/write.txt', readText + 'this is my written text')

// console.log(readText);
// console.log(writtenText);

// reading file text asynchronous way________
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) {
        throw Error('Error reading text')
    }
    // console.log(data);

    // writing text asynchronously__________
    fs.writeFile('./texts/write2.txt', data + "\nThis is solid", 'utf-8', (err) => {
        if (err) {
            throw Error("Error writing data")
        }

        console.log(fs.readFileSync("./texts/write2.txt", "utf-8"));

    })
})


