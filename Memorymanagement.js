/*

In primitive datatype we use stack  memory.copy 

non primmitive stores in Heap Memory.reference;


*/
//ptimitive
let myName="Saswati";
let myGfName="Sambit";

console.log(typeof myName);
console.log(myName);
console.log(myGfName);

//non-primitivr
let myDetails={
    name:"Sonu",
    age:12,
    id:"hey",
}
let me=myDetails;

console.log(me);
me.age=34;
console.log(me);

