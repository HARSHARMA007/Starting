// var(old)               let const(new)
// functined scoped        Braces scoped
// var apne  parent func() mein kahin bhi used ho sakta hai

/*function abcd()
{ 
    for(let/var i  = 1; i<11; i++)
    {
        console.log(i);
    }
       console.log(i);

}
abcd();
*/

//var add itself to window object                     //[ctrl shift b] on your local host 
// let const doesn't 
//so javascript doesnt have some fetures so it is provided by window that is a part of browser(window,stack,heap{browswer context api}) like console ,alert,prompt.
//Browser context API
//stack
// heap-data store karne ke liye

//Execution context-function khud ka ek imaginary [container] bana leta hai
//that has 3 things
//variables
// function inside that parent function
//lexical enviroment of that function-whether is acessible or not
 /*function abcd()
 {
    var a =12;
    function def(){
        var b;      -------------- not accesible by abcd
    }

 }
*/
//copying reference variables
/*b4
var a =[1,2,3,4,5];
var b=a;
b.pop(); 
console.log(a);

after

var a =[1,2,3,4,5];
var b=[...a]           // spread opertor
b.pop();
console.log(b);
console.log(a);
*/
// same could be done for objects
//   var obj = {name : "HARSH"};
//   var copyobj={...obj};

// Truthy vs Falsy
//everything in js  lies in either
//falsy values--0,false,undefined,null,NaN document.all
//every thing else is truthy
 /*
 if(0)
 {
    console.log("hey");
 }
 else{
    console.log("yo");
 }
*/

//foreach,forin,dowhile

//for each- arrays
// changes happen in copy so orginal array remians same

/*
var a=[1,2,3,4,5,6,7,89,90];

a.forEach(function(val)
{
    console.log(val-1);
});
console.log(a);
*/

//forin- object
// objects par loop karne ke liye
/*
var obj={
    name:"harsh",
    age:24,
    city:"agra",
}

for (var key in obj)
{
    console.log(key ,obj[key]); 
}
*/
//do while
/*
var a=123;
do{
    console.log("hey");
    a++;
}
 while(a<13)
 */


 //call back function
// when we write a code for future use ,we use call back funcion to know wheter the code has executed or not
/*
setTimeout(
    function()
    {
    console.log("2 second baad chala");
},10000
);
*/
  
//First class function
//function ko as a value use karna
//
/*
function abcd(a)
{
    a();
}
 abcd(function(){
        console.log("hey");
    }
    )
*/
//How arrays are made behind the scenes
/*
var arr=[11,22,33,44];

arr={
    0:11,
    1:22,
    2:33,
    3:44,
}   

console.log(arr);
*/

//Negative index in array
/*
var arr=[11,22,33,44];
arr[-1]=2;
console.log(arr);
*/


//deleting object props
/*
var a = {
    age :24,
    name :"Harsh",
    contact:369852147
 
}
 delete a.name;
 console.log(a);

*/

 





 



