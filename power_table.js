let user_input=require('readline-sync')
let n=user_input.question("Enthe the number ")
let user_number=parseInt(n)
for (let i=1;i<=user_number;i++){
    let power=Math.pow(2,i)
    console.log("2 to the power",i,"is",power)
}