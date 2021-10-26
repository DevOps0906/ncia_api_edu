const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;  //포트번호는 1~1000 사이는 약속된 거라 개인이 안쓰는 걸로  
var url = require("url");

const server = http.createServer((request, response) => {

    //request  - 클라이언트로부터 요청을 받아서 서버로 전달한다 
    //http://127.0.0.1:4000/?name=Tom&age=12 
    //보낸 정보가 request  객체에 모두 저장되어 있다 
    //console.log( request ); 정보가 JSON 형태로 담겨있다

    // http://127.0.0.1:4000/test?x=3&y=5
    //url은 클라이언트가 header에 보낸 정보 다 /test?x=3&y=5
    //path 는 ? 전까지 

    console.log(request["url"]);
    console.log(request.url);

    var pathname = url.parse(request.url, true).pathname;
    console.log(pathname)
    if (pathname == "/") {
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/html');

        let msg = `
            <h1 style="color:blue">Hello World</h1>
            <h2>This is test server</h2>
        `;
        response.end(msg);
    } else if (pathname == "/login") {
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/html');
        response.end("<h1>login 요청</h1>");
    } else if (hostname == "/board/list") {
        response.statusCode = 200; // 현재 통신 상태에 대한 정보
        response.setHeader('Content-type', 'text/html'); // 내가 보낸 정보타입, html, image, 동영상 ...
        data = [
            { "name": "홍길동", "age": 23, "phone": "010-0000-0000" },
            { "name": "임꺽정", "age": 34, "phone": "010-0000-0000" },
            { "name": "장길산", "age": 50, "phone": "010-0000-0000" },
        ]
        // 문자열을 -> JSON으로 바꾸려면 JSON.dump함수
        // JSON -> 문자열을 바꾸려면 JSON.stringify 함수
        response.end(JSON.stringify(data));
    } else {
        response.statusCode = 404; //현재 통신 상태에 대한 정보
        response.setHeader('Content-type', 'text/html'); //내가 보낼 정보 타입 , html, image, 동영상 ... 
        response.end("페이지가 존재하지 않습니다");
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})