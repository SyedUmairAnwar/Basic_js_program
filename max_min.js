let random=[]
for(let i=0;i<5;i++){
    let ran=Math.floor(Math.random()*901)+100
    random.push(ran)
}
random.sort()
random.forEach(item=> console.log(item))
console.log(random[0],"is the samllest number")
console.log(random[4],"is the maximum number")