const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var url = require("url");

const server = http.createServer((req, res) => {

    // req - 클라이어트로부터 요청을 받아서 서버로 전달한다
    // http://127.0.0.1:3000/?name=Tom?age=12
    // 보낸 정보가 req 객체에모두 저장되어 있다
    console.log(req);

    var pathname = url.parse(req.url, true).pathname;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let msg = `
        <h1 style="color:blue">Hello World</h1>
        <h2> This is test server</h2>
    `;
    res.end(msg);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})