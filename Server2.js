const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;

var fs = require('fs'); //파일 불러오는 라이브러리 

//html 문서를 불러와서 클라이언트로 보내기
const server = http.createServer((req, res) => {

    if (req.method == "GET") {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');

        //nodejs 아무말 안하면 비동기다. 파일 불러오면 브라우저로 전송 
        var data = fs.readFileSync("./html/index.html", "utf-8");
        res.end(data);
    }
    else {
        req.on('data', function (data) {
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end("<h1>" + data + "</h1>");
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})