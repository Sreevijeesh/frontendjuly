//array inbuild methods
let m=[1,2,3,4];
m[4]=7;     //add at 4 index
m[m.length]=8   //add at last index
m.push(5);  
console.log(m);  //add at last index
m.unshift(0)   //add 0 at 0th index
m.pop();    //remove last elemnt
console.log(m);
m.shift();   //remove first elemnt
m.splice(1,2,10,11,23 ,34)
console.log(m);
console.log(m)
console.log(m.slice(2,4))
m.copyWithin(3,0,2)
console.log(m)
m.fill(12,0,3)
console.log(m)
console.log(m.indexOf(12))
console.log(m.lastIndexOf(12))
console.log(m.includes(12))
console.log(m.join(""))
//thisis array  inbuild method
//[1.3,2]

// arr.sort((a,b)=>(a-b))  //this method is used to allign the array as asscending ordeer
// console.log(arr);
//this method is long mthod
let arr=[1,3,2]
for(let i=0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]>arr[j]){
            let bkp=arr[i];
            arr[i]=arr[j];
            arr[j]=bkp;
        }
    }
}
console.log(arr)

m1=[1,1,2,3,4,5,[4,5,6,[6,5,[5]]]];
m1=m1.flat(3);
console.log(m1)
