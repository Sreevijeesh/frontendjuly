//logical operators
// AND OR NOT
//AND->IF BOTH OPERANDS ARE TRUE,IT GIVES TRUE &&  
//OR->IF ANY OPERANDS ARE TRUE ,IT GIVES TRUE  ||
//NOT->IF WE GIVES TRUE,IT GIVES FALSE   !


let income=true;
let cibil=true;
let person=(income && cibil);
console.log(person);



let income1=true;
let cibil1=false;
let person1=(income1 || cibil1);
let application=!person1;
console.log(person1);
console.log(application)


//bitwise operator
//1-> 00000001
//2-> 00000010
//R-> 00000000    AND
//R-> 00000011    OR
console.log(1 | 2);   //bitwise OR   |
console.log(1 & 2);   //bitwise AND &
console.log(2 | 2);


//0=0|4|2   0000000
let read=1;
let write=2;
let result=4; 
let permission=0;
permission=permission | read | write;
console.log(permission)
