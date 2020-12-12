let user=require("readline-sync")
let user_ip=user.question("Enter the number ")
let num=parseInt(user_ip)
function pal(){
    let d=num
    let rev=0
    while(d>=1){
        let r=d%10
        r=Math.floor(r)
        console.log(r)
        rev=(rev*10)+r
        d=d/10
    }
    console.log("the reverse is",rev)
    return(rev)
}
let rev=pal()
if (rev==num){
    console.log(num," is a palandrome number")
}
else{console.log(num," is not a palandrome number")}