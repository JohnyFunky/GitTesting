
var a = 3;
document.write("var a is a " + typeof(a)+ "<br>");
console.log("var a is a " + typeof(a)); 
var b = "Phú";
document.write("var name is a " + typeof(b) + "<br>");
console.log("var name is a " + typeof(b)); 
var c = "10";
document.write("var c is a " + typeof(c) + "<br>");
console.log("var c is a " + typeof(c)); 

document.write(3==6);

var ObjectMe = {
    ten: "Phạm Minh Phú",
    age: 13,
    gender: "Male",
}

document.write(ObjectMe);
document.write(ObjectMe.ten);
document.write(ObjectMe.age);
document.write(ObjectMe.gender + "<br>");

// Array:
var HocSinh = {
    lastName: "Phú",
    gender: true,
    hometown: "Canh Diễn, Hanoi",
}

document.write("I am a Student and my last name is" + HocSinh.lastName + "<br>");
document.write("My hometown is in " + HocSinh.hometown + "<br>");

var arr = [3,6,10,4,5,99,7,8,9];
// document.write ra số 2
document.write("Phần từ thứ 1 trong array là " + arr[1] + "<br>"); 
// document.write ra số thứ 8 tức là ra số number 9;
document.write("Phần từ thứ 8 trong array là " + arr[8] + "<br>");

// Thực hành for loop:
for (let i=0; i <= 2; i++) {
    console.log(arr[i]);
}