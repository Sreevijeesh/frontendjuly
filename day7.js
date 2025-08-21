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



let rowss=7;
let colss=1;
let resultss='';
 

for (let i=1; i<=rowss; i++){
    let numss=1;
    for (let j=1; j<=colss; j++){
        resultss +=j%2!=0 ? numss++:' ';  //result += '*';
       
    }
   
    resultss +='\n';
    colss +=2;
    // num=1;         //this line for restart cols from starting
}
console.log(resultss);


