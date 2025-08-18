//for of
let arr=[2,3,4,5,6,6,7,8,9,6]
for (let a of arr){
       if(arr==5){
        break;
    }
    console.log("array:"+a)
}
//for in
let obj={a:4,b:6,c:5};
for(let x in obj){
    console.log("key:"+x +",value:"+obj[x])
}

for(let x in arr){
    console.log("key:"+x +",value:"+arr[x])
 
}
let array=[10,90,80,70,60,50,40];
for(let c of array){
    if(c == 70){
        break;
    }
    console.log("c="+c);
}


for(let c of array){
    if(c == 70){
        continue;
    }
    console.log("c="+c);
}
// for(let i=0;i<5;){
//     if(i==1)                 //i=0 it prints hi next increment to 1 condition ==1 so skip 
//                             //the value .our value is still 1 so agiin conndition ==1 ..
//                             //its a infitiy  loop in skipinng
//         continue;
//     console.log("hi");
//     i++;
//}
//switch
let day=1;
switch(day){
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednsday")
        break;
    case 4:
        console.log("thursday")
        break;  
    case 5:
        console.log("friday")
        break;
    default:
        console.log("weekend")
                     
}
//array related--Duplicates,unique,second largest,patterns,sorting
//string related--palindrome,anagram
//no related--prime,fibonacci,factorial
//array & string--reverse,frequency

//duplicates
let no=[1,2,3,4,5,6,1,2,3];
let obj4={};
for(let)


