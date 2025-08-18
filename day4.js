//operators
//unary binary
//unary
a=3;
b=a++ + ++a + ++a + a++ + a;    // 3+5+6+6+7=27
console.log(a);
console.log(b);

//binary
c=5%2
console.log(c)
d=5/2
console.log(d)
//expect + all other symbols are accept only numbers
console.log(3+5);
console.log(5+false);
console.log("sree"+4);
console.log(true+9);
console.log(true+false);
console.log("4"+"5");
console.log("7"*"7");
console.log(true*true);
console.log(true*false);
console.log(5*true);
console.log(5*false);
console.log(false*true);
console.log(5.6*65);
console.log(1.1*1.1);
console.log(1.1*1.2);
console.log(1.2*1.2);
console.log("7,"*7);
console.log(1.2*7.);
console.log(17 *1.2);
console.log(a*b);
console.log(1.2*null);
console.log(1.2*undefined);
console.log(1/0);
console.log(0.1+0.2);
console.log(0.1*0.2);

console.log([1,2]+[2,3]);   //1,22,3
console.log([1,2]*[2,3]);   //nan bcz 1,

//non primitive --object
console.log({name:"sree"}+{age:"21"});   //[obj obj][obj obj]
console.log({name:"sree"}*{age:"21"});   //

//relational
//< > <= >= == !=
console.log("21"<"12");
console.log("21">"12");
console.log("21"<12);
console.log("21">12);
console.log("e"<"f");
console.log("sree"<"vijeesh");
console.log("java"<"java script");
console.log(0==null);
console.log(true==true);
console.log(null==undefined);
console.log(0==undefined);

