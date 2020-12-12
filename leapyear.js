let user_input=require('readline-sync')
let year=user_input.question("Enter the year ")
let user_year=parseInt(year)
if (user_year%400==0){
    console.log("it is leap yaer")
}
else if (user_year%4==0 && user_year%100!=0){
    console.log("It is a leap year")
}
else{
    console.log("It is not a leap year")
}