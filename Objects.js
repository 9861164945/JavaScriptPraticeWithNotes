/*
Object we declare in Constructor,literals

 */

//object Creation

//1-Object literals

const mySym=Symbol("key1");
//if u want to add a another  object Inside Your objevct Whatever We called like Symbols using the[] and inside the [] we write our key then we access our data

const jsUser={
    name:"Sambit",
    [mySym]:"key2",
    age:23,
    add:"Delhi",
    email:"sambitdev07@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mon","Sat"]
}
console.log(jsUser);
// we Can access our Object in two Ways
//1
console.log("Accesing Our Object Data using their key with.Notation:"); 
console.log(jsUser.name);
console.log(jsUser.age);
console.log(jsUser.add);
console.log(jsUser.email);
console.log(jsUser.isLoggedIn);
console.log(jsUser.lastLoginDays[1]);
//2
console.log("Accessing our object Data Usinng String Because Our Data will be Stored in object in the form of String ForMat: and  if we declare our key+value in object in the form of String format We cant track it through .operator:this format Called Square Notation :");
console.log(jsUser ["name"]);
console.log(jsUser["age"]);
console.log(jsUser ["add"]);
console.log(jsUser ["email"]);
console.log(jsUser ["isLoggedIn"]);
console.log(jsUser ["lastLoginDays"]);
console.log(jsUser [mySym]);

const user={
    userName:"User",
    email:"user@gmail.com",
    mob:9861164945,
    age:23,
    location:"NewDelhi",
    istThere:false

}
console.log(user.istThere);



//If u want to freeze your object you can freeze it here freeze means you  can not change
Object.freeze(user);
console.log(user);
user.greeting=function(){
    console.log("I am the Greeting Function:")
}
console.log(user.greeting());

//string intropoletion It means
//console.log(`Hello user`${name});
//when we use Backtick inside our printing method i javascript this is called String introploetion;