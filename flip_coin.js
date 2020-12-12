let user_input=require('readline-sync')
let no_of_times=user_input.question("Enter the no of times to flip ")
let head_count=0
let tail_count=0
for(let i=0;i<no_of_times;i++){
    let random=Math.random()
    if (random<0.5){
        tail_count++
    }
    else{head_count++}
}
let head_percent=(head_count/no_of_times)*100
let tail_percent=(tail_count/no_of_times)*100
console.log("No of times head is",head_count)
console.log("no of times Tail is", tail_count)
console.log("Head percent is", head_percent)
console.log("no of times tail count is ",tail_percent)