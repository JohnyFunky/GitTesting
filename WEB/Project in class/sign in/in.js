function check(){

var userName = document.getElementById('userName');
var userPw = document.getElementById('userPw');
console.log(storedName.value)
if(userName.value == localStorage.getItem('name') && userPw.value == localStorage.getItem('pw')){
    alert('You are logged in.');
    check.action="done.html"
}else{
    alert('Error on login');
}
}

