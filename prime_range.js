let user=require("readline-sync")
let user_start=user.question("enter the starting number ")
let start=parseInt(user_start)
let user_end=user.question("Enter the end point ")
let end=parseInt(user_end)
for(let i=start;i<=end;i++){
 let count=0
 for (let j=1;j<(i/2);j++){
    if(i%j==0){
        count++
    }
 }
 if (count==1){
    console.log(i," is a prime number")
 }
}