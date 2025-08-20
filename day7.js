//patterns,sorting
let rows=7;
let cols=1;
let result='';
for (let i=1; i<=rows; i++){
    for (let j=1; j<=cols; j++){
        result +=j%2!=0 ? '*':' ';  //result += '*';

    }
    result +='\n';
    cols +=2;
}
console.log(result);



