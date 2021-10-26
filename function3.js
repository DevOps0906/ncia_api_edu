let array = [3, 4, 5, 7, 8, 9, 11, 12, 1, 2, 10];
result = array.map(a => a * a);
console.log(result);

// map에서 호출되는 함수의 매개변수는 두개이다. 하나는 배열의 요소, 하나는 인덱스
array.map((item, i) => {  // 배열의 요소와 index
    console.log(i, item);
});

let data = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];

data.map((obj, i) => {
    console.log(i, obj);
});