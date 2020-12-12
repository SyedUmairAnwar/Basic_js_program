let user=require("readline-sync")
let user_opt=user.question("Option u want to select 1)faranite 2)celcius ")
let opt=parseInt(user_opt)
let user_data=user.question("Enter the Temp you want to chenge ")
let data=parseInt(user_data)
if ((opt==1 && data>=0 && data<=100 )||(opt==2 && data >=32 && data <= 212 )){
    function convertion(d){
        switch (opt){
            case 1:return((d*9/5)+32)
                break
            case 2:return((d-32)*5/9) 
                break
            default:return("Select the valid option")
        }
    }
   let ren= convertion(data)
   console.log(ren)
}
else {console.log("Enter the data in the perfect range")}