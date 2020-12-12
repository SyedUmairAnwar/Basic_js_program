let user_input=require('readline-sync')
let ham=user_input.question("Enter the number ")
let user_choise=parseInt(ham)
let compute=0
for (let i=1;i<=user_choise;i++){
    let div=1/i
    compute=compute+div
}
console.log("The Nth Harmonics is ",compute)