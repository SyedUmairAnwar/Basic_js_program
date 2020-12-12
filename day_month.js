let user_input=require('readline-sync')
let day=user_input.question("give the day in number ")
let user_day=parseInt(day)
let month=user_input.question("give the month in number ")
let user_month=parseInt(month)
if(user_month==3 && user_day>=20){
    console.log(true)
}
else if(user_month>3 && user_month<6){
    console.log(true)
}
else if(user_month==6 && user_day<=20){
    console.log(true)
}
else {console.log(false)}