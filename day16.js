let binary={0:0,1:0};
let num=13;
while(num>0){
let rem=num%2;
binary [rem]=binary[rem]+1;
num=parseInt(num/2);
}
console.log(binary);