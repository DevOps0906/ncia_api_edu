function sayHello(name) {
    console.log(`안녕하세요 ${name}님`);
}

sayHello("홍길동");

// 함수표현식 - 함수의 이름이 없이 사용
sayHello2 = function(name){
    console.log(`안녕하세요 ${name}님`);
}
sayHello2("임꺽정");

// 함수는 미리 만들어져 있고, 함수 표현식은 코드에 도달할때 만들고 쓰고 버린다.
// 함수표현식은 이벤트 처리할때 주로 많이 사용한다.

// 화살표함수 - 람다표현식
sayHello3 = (name) => {
    console.log(`안녕하세요 ${name}님`);
}
sayHello3("장길산");