//unary and binary
let a=4;
let b=a++ + ++a + a;     //a++(post)  ,   //++a(pre)  //4 + 6 + 6 = 16
console.log(a);
console.log(b);

//binary
// types of binary-->arithmetic logical relational bitwise assignment
//arithmetic   +-*/%        except+ others are used for only num
c=6;
d=6;
e=c/d    //6/6=1
f=c%d     //6/6= 0
console.log(e)
console.log(f)
console.log("7" * 8)       //accept . space (others are NaN)
console.log("7" * false);      //falsy values are 0
console.log("7" * null);   //null=0
console.log("7" * undefined);
console.log("7" + undefined);
console.log(2/0);
console.log(0.1 + 0.2);         //0.1+0.2=0.3000000000004 not 0.3
console.log(0.1 + 0.1);
console.log([1,2] + [3,4]);       //"1,2" + "3,4"  =1,23,4
console.log([1,2] * [3,4]);     //"1,2" * "3,4"  =nan (. space)
console.log({name: "js"} + {"name": "js"})       //object 
console.log({name: "js"} * {"name": "js"})
console.log([23] + [43]);
console.log([23] * [43]);
//relational operators
//< > <= >= == !=
console.log("2" > "12")    //in string its check first num
console.log("21" > "22")
console.log("22" > "22")   //same means false
console.log("21" > 22)
console.log("d" > "a")





