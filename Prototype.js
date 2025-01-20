/*Prototype: it is  a behaviour of javascript
->the default behaviour is prototypical behaviour


*/
//code
//understanding object  and new keyword
function multiplyBy5(num){
    return num*5;
}
const check=multiplyBy5.power=2;

const proro=multiplyBy5.prototype;
console.log(multiplyBy5(5));//2
console.log(check);//2
console.log(proro);//{null}

function scoreChecker(name,score){
    this.name=name;
    this.score=score;
}
scoreChecker.prototype.increment=function(){
    this.score++;
}
scoreChecker.prototype.printme=function(){
    console.log(`Score is ${this.score}`);

}
const sonu= new scoreChecker("sonu",8990);
sonu.increment();
sonu.printme();
const sanu= new scoreChecker("sanu",8990);
sanu.increment();
sanu.printme();
console.log(sonu);
console.log(sanu);
//prototype

Object.prototype.actualLength = function () {
    if (typeof this === "string") {
        return this.trim();
    }
    else{
        console.error("Noit")
    }
};

let myName = "Sambit";
console.log(myName.trim().length); // Output: 6

let myName1 = "   Sambit   ";
console.log(myName1.trim().length); // Output: 6

//finding true length without spce using trim() method
let x={u:"santosh",i:"item",getDeatails:function(){console.log(`Name is :${this.u} and item is ${this.i}`)}};
Object.prototype.sambit=function(){
    console.log("Sambit is a user  created method !");
}
//console.log(x);
//console.log(x.sambit());


//modern 
const Student={
    name:"sonu",
    roll:23
}
const Teaccher={
    name:"sambit",
    subject:"Math"
}
const school={
    name:"DAV",
    __proto__:Teaccher,
    __proto__:Student
}
Object.setPrototypeOf(Teaccher,Student);
let astudnet={aname:"kskkssk      ",i:"ssssssssssssssssssssssssssssssssssss"};
String.prototype.trueLen=function(){
    console.log(`${this.aname}`);
    consolelog(`${this.trim().length}`);
}
astudnet.trueLen();