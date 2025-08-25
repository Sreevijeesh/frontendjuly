//patterns,sorting
let row=7;
let col=1;
let results='';
for (let i=1; i<=row; i++){
    for (let j=1; j<=col; j++){
        results +=j%2!=0 ? '*':' ';  //result += '*';

    }
    results +='\n';
    col +=2;
}
console.log(results);

//number pattern

let rows=7;
let cols=1;
let result='';
 

for (let i=1; i<=rows; i++){
    let num=1;
    for (let j=1; j<=cols; j++){
        result +=j%2!=0 ? num++:' ';  //result += '*';
       
    }
   
    result +='\n';
    cols +=2;
    // num=1;         //this line for restart cols from starting
}
console.log(result);



let rowss=5;
let colss=rowss*2-1;
let resultss='';
 
 for (let i=1; i<=rowss; i++){
   
    for (let j=1; j<=colss; j++){
        resultss += "*";  //result += '*';
           }
   resultss +='\n';
    colss -=2;
    // num=1;         //this line for restart cols from starting
}
console.log(resultss);



let rowsss=5;
let colsss=1;
let resultsss='';
let spaces=rowsss*2-2;
 
 for (let i=1; i<=rowsss; i++){
   for(let j=1;j<=spaces;j++){
    resultsss+=" ";
   }
    for (let j=1; j<=colsss; j++){
        resultsss += "*";  //result += '*';
           }
   resultsss +='\n';
    colsss +=2;

    spaces -=2;
    // num=1;         //this line for restart cols from starting
}
console.log(resultsss);


//inbuild functions
//string   array
//string

let str="hello java";
console.log(str.split(" "))
console.log(str.split("l"))
console.log(str.split(""))
console.log(str.toUpperCase())    //it does not affect original str
console.log(str)
console.log(str.toLowerCase())
console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));
console.log(str.search(/L/i));
console.log(str.replace("java","world"))
console.log(str.slice(0,3));  // (5)   (-3)
console.log(str.substring(1,3))