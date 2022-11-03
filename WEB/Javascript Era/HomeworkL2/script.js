// Set up nho nhỏ
let fruitbasket = [
   [' lemon', 20],
   [' pineapple', 15],
   [' watermelon', 10],
   [' peach', 60],
   [' orange', 10],
] 
console.table(fruitbasket);
// Code bài tập 1
// for (var i = 0; i < fruitbasket.length, i++;) {
//     for (var j = 0; j < 2, j++;) {
//         console.log('I have ' + fruitbasket[i+j]);
//     }
// }

//     console.log('I have ' + fruitbasket[i][j]);

// Anh chcek commetn xem vì sao em lại bị lỗi. Em định là vì khi gọi ra để có một câu ví dụ như I have 15 grapes thì mình sẽ cần làm như kiểu console.log(fruitbasket[i]) nên em định loop i để từ 0 lên 1 lên 2 lên 3 kiểu kiểu thế và j cũng tương tự. Như vậy nó sẽ tiết kiệm thời gian cho em hơn. Em cũng đã có một cách xử lý là ko loop j mà chỉ loop i sau đó console.log(fruitbasket[i+1 hoặc i+2 bla bla ] tuy nhiên cách đó nó ko ngắn cho lắm .

// for (var i=0; i < fruitbasket.length, i++;) {

// }

// console.log('I have ' + fruitbasket[i][1] + fruitbasket[i][0]);
// console.log('I have ' + fruitbasket[i+1][1] + fruitbasket[i+1][0]);
// console.log('I have ' + fruitbasket[i+2][1] + fruitbasket[i+2][0]);
// console.log('I have ' + fruitbasket[i+3][1] + fruitbasket[i+3][0]);
// console.log('I have ' + fruitbasket[i+4][1] + fruitbasket[i+4][0]);

// code bài tập 2 (loop for only):

let text = "Đây là code dùng loop for nguyên bản <br>";
for (let j = 0; j < fruitbasket.length; j++) {
  text += fruitbasket[j] + "<br>";
}

document.getElementById("demo").innerHTML = text;
// Em tham khảo từ bên w3achool
// Loop for in
let code = "Đây là code dùng loop for in <br>";
for (let k in fruitbasket) {
    code += fruitbasket [k] + "<br>";
}
document.getElementById("demo2").innerHTML = code;
// Loop for of
let demo3 = "Đây là code dùng loop of <br>"
for (let x of fruitbasket) {
    demo3 += fruitbasket [x] + "<br>";
}
document.getElementById("demo3").innerHTML = demo3;

// Bài tập thứ 3 (trình bày trên console):
// Code mẫu từ đề:
var myDog = {
    "name": "Ngáo",
    "legs": 4,
    "friends": ["everything!"]
}
var Husky = myDog;
Husky.colors = "Brown";
delete Husky.friends;
console.log(myDog)