//ternary operator
let time=11;
let type=time>=10 ? "office closed" : "office opened"
console.log(type);

//statement
//conditional iterative switch jump
//conditional     if   else
    if(2<1){
        console.log("condition is true")
    }else{
        console.log("condition is false")
    }
    //types of if   //ladder nested
    let mark=65;
    if(mark>=70){
        console.log("grade=A")
    }
    else if(mark>=60){
        console.log("grade=B")
    }
    else if(mark>=50){
        console.log("grade=c")
    }

    //nested if
if(mark>=65){
    if(mark>80){
        console.log("A")
    }else{
        console.log("B")
    }

}

//iteration 
//for while do-while

for (let i=6; i<11; i+=2){
    console.log(":"+i)
}
    let arr=[2,4,5,6,7,8,9,3,45,65,76,98]
for (let i=6; i<11; i++){
    console.log(":"+arr[i])
}

let i=0;
while (i<10){
    console.log("array element:"+i);
    i++;
}



i=0;
do {
    console.log("do:"+i);
    i++
}while(i<=10)