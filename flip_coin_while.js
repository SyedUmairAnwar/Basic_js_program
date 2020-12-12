let headwin=0
let tailwin=1
let headcont=0
let tailcount=0
while(headcont<=11 && tailcount <=11){
    let ran=Math.floor(Math.random()*10)%2
    if (ran==headwin){
        headcont++
    }
    else if(ran==tailwin){
        tailcount++
    }
    if(headcont==11){
        console.log("Head wins")
        break
    }
    if (tailcount==11){
        console.log("Tail wins")
        break
    }
}
