let user=require("readline-sync")
let user_num=user.question("Enter the number")
let num=parseInt(user_num)
for (let i=2;i<num;i++){
    while(num%i==0){
        console.log(i)
        num=num/i
    }
}
if (num>2){console.log(num)}