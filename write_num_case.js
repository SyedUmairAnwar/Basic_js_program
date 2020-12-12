let user=require("readline-sync")
let user_num=user.question("Enter the number")
let num=parseInt(user_num)
switch(num){
    case 1:console.log("one")
            break
    case 0:console.log("Zero")
            break
    case 3:console.log("Three")
            break
    case 4:console.log("Four")
            break 
    case 5:console.log("Five")
            break
    case 6:console.log("Six")
            break
    case 7:console.log("Seven")
            break
    case 8:console.log("Eight")
            break
    case 9:console.log("Nine") 
            break
    default:console.log("Enter the number between 0-9")             
}