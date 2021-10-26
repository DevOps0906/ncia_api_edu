const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;

var fs = require('fs'); //파일 불러오는 라이브러리 
var url = require("url"); //get 방식 파서
var querystring = require("querystring"); //post방식 파서

//html 문서를 불러와서 클라이언트로 보내기
const server = http.createServer((req, res) => {

    // http://127.0.0.1:4000/?name=Tom&age=12 
    var pathname = url.parse(req.url, true).pathname;
    if (req.method == "GET" && pathname == "/") {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');

        //문자열을 받아서 json 객체로 전환한다 키와 값 쌍의 형태로 
        //{name:"Tom", age:23, phone:"010-0000-0000"}
        var query = url.parse(req.url, true).query;
        console.log(query["name"]);  //두가지 표현 모두 가능하다 
        console.log(query.name);

        console.log(query["age"]);  //두가지 표현 모두 가능하다 
        console.log(query.age);

        //json을 문자열로 바꾸어서 전달하는 함수 
        res.end(JSON.stringify(query));
    }

    if (req.method == "POST" && pathname == "/") {
        req.on('data', function (data) {
            var data = querystring.parse(data.toString());
            console.log(data["name"]);  //두가지 표현 모두 가능하다 
            console.log(data.name);

            console.log(data["age"]);  //두가지 표현 모두 가능하다 
            console.log(data.age);

            res.end(`${data["name"]}  ${data["age"]}`)
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})