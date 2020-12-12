let user=require("readline-sync")
let user_num=user.question("Enter the number")
let num=parseInt(user_num)
let n=1
let power=0
while(power<256 && n<=num){
    power=Math.pow(2,n)
    console.log(power)
    n++
}