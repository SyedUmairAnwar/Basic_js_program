let user=require("readline-sync")
let user_num=user.question("Enter the num")
let num=parseInt(user_num)
let count=0
for (let i=1;i<(num/2);i++){
    if(num%i==0){
        count++
    }
}
if (count==1){
    console.log(num," is a prime number")
}
else{console.log(num," is not a prime number")}