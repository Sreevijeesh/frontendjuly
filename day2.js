//array
let s=[23,43,12,21,54,55];
console.log(s);
s[2]=44;
console.log(s);
console.log(s[3])
s[16]=678;
console.log(s)
console.log(s.length)

let a=s;  //shallow copy
a[10]=100;
console.log(a);


//object     //key value
let obj={name:"sree , vijeesh, sreevijeesh",number:"one,2,three"}
console.log(obj)
console.log(obj["name"]);
obj["name"]="updated";
console.log(obj)
Object.seal(obj)  //cant updated in future
console.log(obj)
Object.freeze(obj)
console.log(obj)
console.log(Object.keys(obj));
console.log(Object.values(obj))
//block
{
    var k=12;
    let a=76;   //let doesn't support on block scope

}
console.log(k)
console.log(a)
//operators
//unary and binary


