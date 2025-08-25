let str="sree vijeesh"
console.log(Array.from(str.matchAll("e")));
console.log(str.padStart(15,"Mr."));
console.log(str.padStart(str.length+3,"MR."));
console.log(str.repeat(3))
console.log(str.trim())
console.log(str.includes("ee"))
console.log(str.startsWith("sr"))
console.log(str.endsWith("h"))
console.log(str.charAt(3))
console.log(str[3])

//2a3b4c
let word="2a3b4c"
let result=""
let digit=0;
for(let i=0; i<word.length;i++){
    if(!isNaN(word[i])){
        digit=parseInt(word[i])
    }
else{
    result +=word[i].repeat(digit);
    digit=0
}
}
console.log(result)