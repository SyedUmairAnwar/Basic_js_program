let user=require("readline-sync")
let user_num=user.question("Enter the num")
let num=parseInt(user_num)
let fact=1
for(let i=1;i<=num;i++){
    fact=fact*i
}
console.log(fact,"is the factorial of ",num)