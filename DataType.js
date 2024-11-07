/*  

=> javascript is  both client and server side language  allows user to make wesite attractive.
Javascript is Dynamic Typed Language.

histrory:1.8 bilion website uses js in their website.
in created by EICH in 1995 at netscape;.


running code of js we have to install the node js server.
 Javascript Implementation
using script tag we use js in our html code.

What is the diff btn primitive and non primitive

primitive:types 7 category:String,Number,Boolean,null,undefined,Symbol,BigInt (Long Value,Scintfic value)
Reference  types:array,Object,functions.  
*/
const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;
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
