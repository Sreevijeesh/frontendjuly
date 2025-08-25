//add no in arr element
let arr=[1,2,3,4,5,6,7];
for(i=0;i<arr.length;i++){
    arr[i]+=+5;
};
console.log(arr);

let arr1=[1,2,3,4,5,6,7];
let arr2=[];
for(i=0;i<arr1.length;i++){
    arr2.push(arr1[i]+5)
}
console.log(arr2);
console.log(arr1);

let array=[{name:"sree",age:21},{name:"vijeesh",age:32},{name:"breeze",age:32}];
let array1=[];
for(i=0;i<array.length;i++){
    array1.push({age:array[i].age});   //disadvantages==every time we need to create new 
                                          // let and for loop
                                                 
};
console.log(array);
console.log(array1);
//advantage
let array2=array.map((e,i,array)=>{    //e=element of array,i=index of array,array=org array
    return{age:e.age}            //map purpose manipulate each elements in the array[age*2]
                                //and extrate the specific object in the array
})
console.log(array2);

//filter
let array3=array.filter((e,i,array)=>{   
    return e.age>30       //condition    //filtered the obj age below 30
                           // if we give (e.age) onluy means it print all expect     
})                      //(0) bz 0 is a false value // it print only truty value
console.log(array3);

//map in filter condition       //flat map is nothing but return [e.age>30]-flat remove []
let array4=array.map((e,i,array)=>{   
    return e.age>30       //condition is true means it print true only
                             
})                      
console.log(array4);
//find          //find index=>it find the index 
let array5=array.find((e,i,array)=>{   
    return e.age>30       //find checks the condition if it true it print and don't check nxt obj
                             
})                      
console.log(array5);


//printing same age as one obj
let obj={};
for (let i=0;i<array.length;i++){
    if(obj[array[i].age]){
        obj[array[i].age].push(array[i]);
    } else{
        obj[array[i].age]=[array[i]];
    }
}console.log(Object.values(obj))

//reduce
let m=[1,2,4,5];
let num=m.reduce((prev,curr)=>{
    return prev+curr;
},0);
console.log(num)

//for each
array.forEach( (e)=> {
    console.log(e);
});-