let user=require("readline-sync")
let user_num=user.question("Enter the Num ")
let num=parseInt(user_num)
switch(num){
    case 1:console.log("unit")
        break
    case 10:console.log("Ten")
        break
    case 100:console.log("Hunded")
        break
    case 1000:console.log("Thousand")
        break
    default:console.log("please enter 1,10,100,1000")
}