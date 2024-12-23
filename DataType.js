/*  

=> javascript is  both client and server side language  allows user to make wesite attractive.
Javascript is Dynamic Typed Language.

histrory:1.8 bilion website uses js in their website.
in created by EICH in 1995 at netscape;.


running code of js we have to install the node js server.
 Javascript Implementation
using script tag we use js in our html code.

What is the diff btn primitive and non primitive

primitive:types 7 category:
String,"string"
Number,:89.89;
Boolean,:true false
null,:null
undefined,:initialize but noit gin=ving the value
Symbol,:@#$
BigInt (Long Value,Scintfic value)
Reference types:
array:
,Object
,functions
.  
*/
const score=100;
typeof(score);

//integer in java int n=10;
const scoreValue=100.3;//float
const isLoggedIn=false;//boolean
const outsideTemp=null;//null
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);

//reference
const heros=["Shaktiman","nagraj","doga"];
 let obj1={
    name:"aaaa",
    age:22
 }
 console.log(obj1.name);
 //Function
 const myFunction=function(){
    console.log("Hey I am A function");

 }
 //function Call;
 console.log(myFunction());
 console.log(typeof myFunction());
 console.log(typeof score);
 console.log(typeof obj1);
 console.log(typeof userEmail);

  function f1()
  {
   const f2=12;// can nit be re initialize/not changable /block scope;
   let n2=90.9;// can reinitialize /Changebale/block scope;

  }
