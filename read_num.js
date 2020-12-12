let user=require("readline-sync")
let user_num=user.question("Enter the number")
let num=parseInt(user_num)
if(num==1){console.log("unit")}
else if(num==10){console.log("ten")}
else if (num==100){console.log("Hundred")}
else if(num==1000){console.log("Thousand")}
else{console.log("Please give the number  as 10,1,100,1000")}