//variables   //a=10   a is a variable when a is call 10 is print
//types of variables=local global block
//datatypes are primittive--(10,9,100,50) and non primitive--(54)
//primittive---number boolean string symbol undefined null
//non primitive (array object)
let array=[10,20,30,40,50,"sree"];  //[index,index,index]
console.log(array[2]);
array[15]=56;
console.log(array);
console.log(array.length);
let foods={tiffin:"dosai,idly,poori",lunch:"cbriyani,mbriyani,meals",
    dinner:"dosai,parrato,chappati",price:[45,65,74,76]};  //key:"value"
console.log(foods.lunch);   //foods is not an array its a object
let a = array;
array[1]=67;
console.log(array[1]);   //doubt
console.log(a[1]);
console.log(foods.tiffin.length); //counts all the charaters and space
console.log(foods.lunch.length);
console.log(foods["dinner"]);
foods["special"]="bbriyani";
console.log(foods);
let gh=foods;
foods["lunch"]="fried rice";  //key=value is changed
console.log(gh);

// Object.seal(foods);   //can't add new key in future
// Object.freeze(gh);   //can't modified any thing
console.log(Object.keys(foods))
console.log(Object.values(foods))
foods["normal"]="abnormal"
console.log(foods);
//let var const    
// t=12;
// let t;
// console.log(t) 

// t=12;
// var t;
// console.log(t) 

//const doesn't update once decalared ex--<a=>

{
    var j=90     //blockscope let doesn't support
    let l=87      //var support inside the curly 
}
console.log(j)
console.log(l)

//operators
//unary and binary       a+b and a++,a--
//  let foods["madiam"]=foods["lunch"];   //key name change
//  delete foods["lunch"];
//  console.log(foods)