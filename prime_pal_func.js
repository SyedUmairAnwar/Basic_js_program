let user=require("readline-sync")
let user_ip=user.question("Enter the number ")
let num=parseInt(user_ip)
function prime(num){
 let count=0
 for (let i=1;i<(num/2);i++){
    if(num%i==0){
        count++
    }

 }
 if (count==1){
    console.log(num," is a prime number")
    return (true)
 }
 else{console.log(num," is not a prime number")
    return(false)
 }
}
let output=prime(num)
if (output ==true){
    let palandrome=pal()
    console.log(palandrome," is the reverse")
    let check=prime(palandrome)
    if (check==true){console.log(palandrome, "is  a prime and palindrome")}
    else{console.log(palandrome," is not a prime and palindrome")}
}


function pal(){
    let d=num
    let rev=0
    while(d>=1){
        let r=d%10
        r=Math.floor(r)
        rev=(rev*10)+r
        d=d/10
    }
    return(rev)
}
   

