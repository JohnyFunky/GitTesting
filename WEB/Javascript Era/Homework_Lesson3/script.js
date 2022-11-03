const pyramids = [1, 11, 111, 1111, 11111, 111111];
for (x of pyramids) {
    console.log(x);
}

var myArr = [9,7,9,0,7,8,387,123,456];
for (var i=0; i<myArr.length; i++) {
 if (myArr[i] % 2 === 0 & myArr[i] !== 0) {
    console.log("This number is even but not number 0");
 }
 else if (myArr[i] === 0 & myArr[i] % 2 === 0) {
    console.log("This number is even (mốc number 0)");
 }
 else {
    console.log("This number is odd");
 }
}

// Bài kể chuyện
var games = prompt("Bạn đã xem anime bao giờ chưa? (chỉ trả lời YES hoặc yes hoặc NO hoặc no)");

if (games === "YES" | games === "yes") {
   wibu;
}else if (games === "NO" | games === "no" ) {
  history;
}

// Nhánh 1:
var wibu = prompt("Bạn là wibu à? (chỉ trả lời YES hoặc yes hoặc NO hoặc no)")

if (wibu === "YES" | wibu === "yes") {
    history;
 }else if (wibu === "NO" | wibu === "no" ) {
   alert("Kệ bạn, tôi cũng không phải");
   miku
 }
var miku = "Bạn biết Hatsune Miku không";
var war = prompt("Hãy trình bày về cuộc chiến tranh giữa bạn và con gián trong nhà lúc 12 giờ đêm ở dưới tầng 1 vì bạn quyết định ăn vụng xúc xích Đức Việt trong tủ lạnh.");
var meat = prompt("Bạn thích ăn thịt người không. Cái này thì tôi không comment gì");
var mouse = prompt("Hãy nêu cảm nhận của bạn về một người gặp được một con chuột cống và quyết định nhận nuôi nó như một con hamster đúng nghĩa");

var myAnswer = [games, wibu, war, meat, mouse];
console.log(myAnswer);

