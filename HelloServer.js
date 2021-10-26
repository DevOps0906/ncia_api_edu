var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Hello Nodejs</h1>");
    console.log("localhost:3000 Server start")
}).listen(3000);