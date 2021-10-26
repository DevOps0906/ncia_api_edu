let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 짝수, 홀수를 분리해서 각자의 배열에 추가하고 싶다
let odd_array = [];
let even_array = [];

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        even_array.push(array[i]);
    } else {
        odd_array.push(array[i]);
    }
}

console.log(odd_array);
console.log(even_array);

// 배열이 멤버함수를 추가 filter 라는 함수를 추가함
// filter라는 함수는 매개변수로 함수를 준다. callback함수를 매개변수로 전달을 한다
// 반환값이 true 나 false인 함수를 준다. 이 콜백함수의 매개변수는 배열의 요소 한개씩

function isEven(x) {
    if (x % 2 == 0)
        return true;
    else
        return false;
}

function isOdd(x) {
    if (x % 2 != 0)
        return true;
    else
        return false;
}

// 배열의 요소마다 isEven 함수를 호출해서 짝수만 걸래냄
result1 = array.filter(isOdd);
console.log(result1);

result2 = array.filter(x => x % 2 == 1);
console.log(result2);

let words = ["school", "cloud", "rain", "flower", "sirvey", "hospital", "raindow", "company"];
//다섯글자 이상만 잘라내기
w1 = words.filter(x => x.length > 5);
console.log(w1);

// map - 모든 요소에 공통된 수식이나 함수를 적용한다
w2 = words.map(x => x.toUpperCase());
console.log(w2);

w3 = words.filter(x => x.length > 5).map(x => x.toUpperCase());
console.log(w3);

words.forEach(x => {
    console.log(x);
});
