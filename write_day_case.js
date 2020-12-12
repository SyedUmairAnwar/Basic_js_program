let user=require("readline-sync")
let user_num=user.question("Enter the Day ")
let Day=parseInt(user_num)
switch(Day){
    case 1:console.log("monday")
            break
    case 0:console.log("sunday")
            break
    case 3:console.log("Tuesday")
            break
    case 4:console.log("Wednesday")
            break 
    case 5:console.log("Thursday")
            break
    case 6:console.log("Friday")
            break
    case 7:console.log("Saturday")
            break
    default :console.log("Plrase enter the valid day")   
}         