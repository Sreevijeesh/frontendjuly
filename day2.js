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




console.log(10+5);
console.log("43"+5);
console.log("true"+"false");
console.log("true"+6);
console.log(45 > 56);
console.log("44"*7);
console.log("true"*"false");
console.log("false">"true");
console.log(5566==5566.0000000);
console.log("null"=="false");
console.log("true"=="false");
console.log(45%74);
console.log("45"%"74");
console.log("2.5"*"56");
console.log([556]*[758]);














<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nextconf-Webflow HTML Web page</title>
    <link rel="icon" href="img/next1.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
</head>
<style>
    #bgr{
        background-color: black;
        width: 100vw;
        height: 350vh;
        
    }
    .main{
    width: 30vw;
    height: 80vh;
    border-radius: 25px;
margin-left: 60px;
margin-bottom: 10px;


    background-color:#4f19eb;
}
   .main2{
    width: 30vw;
    height: 70vh;
    border-radius: 25px;
    margin-top: 20px;
    margin-left: 60px;



    background-color: #4f19eb;
}  
#main3{
      width: 30vw;
    height: 70vh;
    border-radius: 25px;
    margin-top: 20px;
    margin-left: 20px;



    background-color: #4f19eb;
}
#main34{
    width: 100vw;
    height: 65vh;
    display: flex;
    justify-content: space-around;

}
.main3{
    width: 30vw;
    height: 60vh;
    border-radius: 35px;
    margin-left: 60px;
    margin-top: 20px;
    


    background-color: rgb(16, 202, 25);
}
   .main4{
    width: 60vw;
    height: 60vh;
    border-radius: 35px;
    margin-right: 60px;
    margin-left: 20px;
    margin-top: 20px;
    


    background-color: rgb(16, 202, 25);
}
.img1{
    width: 90px;
    height: 90px;
    margin-top: 30px;
    margin-left: 25px;
}
.top{
    width: 100%;
    height: 30%;
    align-items: center;
    background-color:;
    

}
h1{
    margin-left: 30px;
    color: white;
}
.but{
    width: 80%;
    height: 12%;
    margin-left: 35px;
    font-size: larger;
    text-align: left;
    font-weight: 650;
}
#last{
    height: 30%;
    width: 100%;
    background-color:;
    display: flex;
    justify-content: space-around;
}
#lleft{
    height: 80vh;
    width: 35vw;
     margin-left: 60px;
    background-color: #4f19eb;
     margin-top: 20px;
      border-radius: 35px ;
}
#lcenter{
    height: 80vh;
    width: 30vw;
    background-color: #4f19eb;

     margin-top: 20px;
     margin-left: 20px;
     border-radius: 35px ;
     
}
#lright{
     border-radius: 35px ;
    height: 80vh;
    width: 40vw;
     margin-right: 60px;
    background-color: #84f649;
     margin-top: 20px;
     margin-left: 20px;
}


</style>
<body>
    <div  id="bgr">
    <div class="main">
        <div class="top"><img class="img1" src="img/next1.png" alt=""></div>
         <h1>ABOUT</h1>
         <h1>EVENTS</h1>
         <h1>TESTIMONIAL</h1>
         <h1>CONTACT</h1>
         <div>
              <button class="but">JOIN NEXT MEETUP  
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></div>
       
<div id="four100">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
    </div>
    <div class="main2"></div>
    <div id="main34">
        <div class="main3"></div>
        <div class="main4"></div>
    </div>
    <div id="last">
        <div id="lleft"></div>
         <div id="lcenter"></div>
          <div id="lright"></div>
    </div>
    
    </div>
</body>
</html>
