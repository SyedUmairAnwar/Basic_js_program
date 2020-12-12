let user=require("readline-sync")
let user_choise=user.question("your number is 50 1)equal 2)less 3)greater ")
let choise=parseInt(user_choise)
if (choise==1){
    console.log("your number is ",50)
}
let li=0
let hi=100
let mi=(li+hi)/2
while(li<=hi){
    
    if (choise==1){
        console.log("your number is ",mi)
        break
    }
    if (choise==2){
        hi=mi-1
        mi=(hi+li)/2
        mi=Math.round(mi)
        console.log("your number is ",mi)
        user_choise=user.question(" 1)equal 2)less 3)greater ")
        choise=parseInt(user_choise)
    }
    if (choise==3){
        li=mi+1
        mi=(hi+li)/2
        mi=Math.round(mi)
        console.log("your number is ",mi)
        user_choise=user.question(" 1)equal 2)less 3)greater ")
        choise=parseInt(user_choise)
    }    
}