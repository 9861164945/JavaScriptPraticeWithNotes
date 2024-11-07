/*
pls mention function name like required name;
using rest operator we can fetch more than one value in the Function;
rest Operator and Spread Operator are same syntax but the UseCase is Different;
*/
function calCart(val1,val2,...num1)
{
    return num1;
}
console.log(calCart(100,200,3000,4000));
// function calCart(...num1)
// {
//     return num1;
// }
// console.log(calCart(100,200,3000,4000))
// function calCart(num1)
// {
//     return num1;
// }
// console.log(calCart(100,));
// Passing Object in the Array
const user=
{
    username:"Sambit",
    price:199
}
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
//console.log(handleObject(user))
handleObject(user);
//passing Array in function
const myArr=[1,2,3,4,5,6,78,99,"bjnskndjbs"];
function accesing(getArray){
    return getArray[2];
}

console.log(accesing(myArr));


