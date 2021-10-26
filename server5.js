const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;  //포트번호는 1~1000 사이는 약속된 거라 개인이 안쓰는 걸로  
var url = require("url");
var fs = require("fs");
var ejs = require("ejs");

let data1 = { "title": "제목1", "number": 10 };
//html nodejs 서로 관계가 없다. 
//랜더링 - html 문서 불러와서 이 문서와 nodejs를 결합해서 새로운 html 문서를  만들어 보내는 과정 
//엔진 - pug(jade):너무 어려워서 안씀, jade html 변환 사이트,  ejs(이걸 많이 사용), jsp나 asp랑 비슷하다 
//npm install ejs 엔진 설치 - 해당폴더에 
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
    console.log(pathname);
    if (pathname == "/") {
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/html');
        var data = fs.readFileSync("./html/index.html", "utf-8");
        response.end(data);
    }
    else if (pathname == "/data1") {
        //파일을 불러서 ejs엔진을 통해서 결합을 해야 한다 
        //readFile 함수는 비동기로 파일을 읽는다. 비동기는 파일을 읽기 시작하는 순간 바로 리턴한다 
        //보통 파일의 크기가 클 경우에 주로 많이 사용한다. 
        //파일의 크기가 클 경우에 파일 읽는 시간동안 프로세스가 정지되는것을 막기 위해 사용한다 
        //파일을 모두 읽으면 전달된 콜백함수를 호출해준다 
        //콜백함수의 매개변수는 에러객체와 파일 내용이다
        fs.readFile("./html/data1.html", "utf-8", function (error, data) {
            //error - 파일 읽다가 오류가 발생할때 오류 정보 전달객체
            //data - 읽어들인 파일 내용
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end(ejs.render(data, data1));  //ejs 엔진으로 렌더링한 정보를 보낸다  
            //첫번째 인자는 파일내용이고 두번째인자는 보내야할 정보를 JSON형태로 보낸다 
        });
    }
    else if (pathname == "/data2") {
        fs.readFile("./html/data2.html", "utf-8", function (error, data) {
            //error - 파일 읽다가 오류가 발생할때 오류 정보 전달객체
            //data - 읽어들인 파일 내용
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end(ejs.render(data, {
                "name": "홍길동",
                "address": "서울시",
                "fruits": ["사과", "배", "포도", "참외", "수박"],
                "product": [
                    { "product_name": "갤럭시 s21", "product_price": 1200000 },
                    { "product_name": "lg oled tv", "product_price": 4000000 },
                    { "product_name": "lg 드럼세탁기", "product_price": 2000000 },
                    { "product_name": "TV", "product_price": 120000 },
                    { "product_name": "아이폰", "product_price": 700000 }
                ]
            }));
        });
    }
    else if (pathname == "/test1") {
        fs.readFile("./html/test1.jade", "utf-8", function (error, data) {
            //error - 파일 읽다가 오류가 발생할때 오류 정보 전달객체
            //data - 읽어들인 파일 내용
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.end(ejs.render(data, {
                "name": "홍길동",
                "address": "서울시",
                "fruits": ["사과", "배", "포도", "참외", "수박"],
                "product": [
                    { "product_name": "갤럭시 s21", "product_price": 1200000 },
                    { "product_name": "lg oled tv", "product_price": 4000000 },
                    { "product_name": "lg 드럼세탁기", "product_price": 2000000 },
                    { "product_name": "TV", "product_price": 120000 },
                    { "product_name": "아이폰", "product_price": 700000 }
                ]
            }));
        });
    }
    else {
        response.statusCode = 404; //현재 통신 상태에 대한 정보
        response.setHeader('Content-type', 'text/html'); //내가 보낼 정보 타입 , html, image, 동영상 ... 
        response.end("페이지가 존재하지 않습니다");
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})