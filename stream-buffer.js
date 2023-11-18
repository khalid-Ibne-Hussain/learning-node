const http = require('http');
const fs = require("fs");

// create a server using raw nodejs
const server = http.createServer();

// listener
server.on('request', (req, res) => {
    // console.log(req);
    if (req.url === '/read-file' && req.method === 'GET');
    // streaming file reading
    const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')

    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer)
    })
    readableStream.on('end', () => {
        res.statusCode = 500;
        res.end("The streaming is over!")
    })
    readableStream.on('error', (error) => {
        console.log(error);
        res.statusCode = 500;
        res.end("Something went wrong!")
    })


    // res.end("Hello world")
})

server.listen(5000, () => {
    console.log(`Server is listening on 5000`);
})