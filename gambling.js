let win=1
let lose=0
let amount=100
let wincount=0
let losecount=0
let bet=0
while(amount>0 && amount<200){
    bet++
    let ran=Math.floor(Math.random()*10)%2
    if(ran==win){
        amount++
        wincount++
    }
    if(ran==lose){
        amount--
        losecount++
    }
}
console.log("Total no of bet is ",bet)
console.log("Total win time ",wincount)
console.log("Total lose time is ",losecount)