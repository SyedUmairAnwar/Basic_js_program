let user=require("readline-sync")
let user_num1=user.question("Enter the number ")
let a=parseInt(user_num1)
let user_num2=user.question("Enter the number ")
let b=parseInt(user_num2)
let user_num3=user.question("Enter the number ")
let c=parseInt(user_num3)
let x=a+b*c
let y=c+a/b
let z=a%b+c
let w=a*b+c
if(x>y&&x>z&&x>w){console.log("a+b*c is greater")}
else if (y>x&&y>w&&y>z){console.log("c+a/b is greater")}
else if(z>x&&z>w&&z>y){console.log("a%b+c is greater")}
else if(w>x&&w>y&&w>z){console.log("a*b+c is greater")}
if(x<y&&x<z&&x<w){console.log("a+b*c is smaller")}
else if (y<x&&y<w&&y<z){console.log("c+a/b is smaller")}
else if(z<x&&z<w&&z<y){console.log("a%b+c is smaller")}
else if(w<x&&w<y&&w<z){console.log("a*b+c is smaller")}
