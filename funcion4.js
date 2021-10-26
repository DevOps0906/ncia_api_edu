// 함수의 오버로딩이 안된다.
// 기본값, 매개변수에 기본값을 주어서 마치 오버로딩과 같은 효과를 준다

function add(a = 1, b = 2, c = 3) {
    return a + b + c;
}
console.log(add()); // 1+2+3
console.log(add(10)); // 10+2+3
console.log(add(10, 20)); // 10+20+3
console.log(add(10, 20, 30)); // 10+20+30

// 콜백함수 - 작성자와 호출자가 다른경우, 이벤트 핸들러
function myfunc(callback){
    console.log("callback 함수 호출하기");
    callback();
    console.log("callback 함수 호출하기");
}
function callback() {
    console.log("This is callback function");
}

myfunc(callback);
myfunc( ()=> {
    console.log("화살표함수를 사용해보자");
})