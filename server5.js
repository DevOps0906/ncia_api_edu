const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;  //포트번호는 1~1000 사이는 약속된 거라 개인이 안쓰는 걸로  
var url = require("url");
var fs = require("fs");

let data1 = {"title":"제목", "number":10};
// html nodejs 서고 관계가 없다
// 렌더링 - html 문서 불러와서 이 문서의 nodejs를 결합해서 새로운 html문서를 만들어 내는 과정
//
//

const server = http.createServer((request, response) => {

    console.log(request["url"]);
    console.log(request.url);

    var pathname = url.parse(request.url, true).pathname;
    console.log(pathname)
    if (pathname == "/") {
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/html');
        var data = fs.readFileSync("./html/index.html", "utf-8");

        // let msg = `
        //     <h1 style="color:blue">Hello World</h1>
        //     <h2>This is test server</h2>
        // `;
        response.end(data);

    } else {
        response.statusCode = 404; //현재 통신 상태에 대한 정보
        response.setHeader('Content-type', 'text/html'); //내가 보낼 정보 타입 , html, image, 동영상 ... 
        response.end("페이지가 존재하지 않습니다");
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})