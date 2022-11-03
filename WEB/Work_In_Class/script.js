var prime=[1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12];
var temp = 0;
function IsPrime(n) {
for (let i = 2; i < n; i++) {
    if(n % i == 0){
        return false;
    }
}
    return true;    


}
console.log(IsPrime(15)); 

for (let i =0; i < prime.length; i++){
    if(IsPrime(prime[i]) == true){
        temp += 1;
    }
}

console.log(temp);