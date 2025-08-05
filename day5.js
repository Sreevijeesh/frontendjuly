//advance for loop
let arr =[1,2,3,6,8,9,5]
for(let a of arr){
    console.log(a);
}
for(let a in arr){
    console.log(a);
}
for (let b of arr){
    if(b==3)
        break;
    console.log(b)
}for(let i=0; i<5;i++){
if(i==3){
    continue;
}
console.log("values:"+i)
}
let grade="A"
switch(grade){
    case"A":
    console.log("school first");
    break;
    case"B":
    console.log("topper");
    break;
    default:
        console.log("you are fail")

}





