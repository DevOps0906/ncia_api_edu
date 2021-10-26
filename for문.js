let book = [
    { "title": "쌍갑포차", "author": "배혜수", "publisher": "다음" },
    { "title": "뽀짜툰", "author": "채유리", "publisher": "다음" },
    { "title": "고수", "author": "문정후", "publisher": "네이버" },
    { "title": "아지갑놓고나왔다", "author": "미역", "publisher": "다음" },
    { "title": "쿨핫", "author": "유시진", "publisher": "시공사" }
]

for (i = 0; i < book.length; i++) {
    console.log(book[i].title, book[i].author, book[i].publisher);
}

for (i in book) {
    console.log(book[i].title, book[i].author, book[i].publisher);
}

for (item of book) {
    console.log(item.title, item.author, item.publisher);
    console.log(item["title"], item["author"], item["publisher"]);
}