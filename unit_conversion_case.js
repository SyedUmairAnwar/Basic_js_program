let user=require("readline-sync")
let user_ip=user.question("1)Feetto inch 2)Feet to Meter 3)inch to feet 4)Meter to Feet ")
let choise=parseInt(user_ip)
let user_data=user.question("Enter the data that want to chage ")
let data=parseInt(user_data)
switch(choise){
    case 1:console.log(data*12)
        break
    case 3:console.log(data*0.0833333)
        break
    case 2:console.log(data*0.3048)
        break
    case 4:console.log(data*3.28084)
        break
    default:console.log("Please enter the valid option")
}