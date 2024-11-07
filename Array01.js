console.log("Array");
/*
Array:Array is a object which collection of various types of   element.
Array are Not Associative.

Array in js Creates Shallow Copy;

*/
const my=[0,2,3,4,5,6,7,true,"Sambit"];
console.log(my[0]);
 const players=["dhoni","Raina","Rohit","Virat"];
 console.log(players[1]);

//Array Method
const myArr=[3,4,5,6,7];
myArr.push(80);//adding Values in the Array.
console.log(myArr);
myArr.pop();//Deleting the last Element.
console.log(myArr);
myArr.unshift(100);//Inserting in the Starting point of the Array.
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(8));//return true or false  if the element is exist in the  array or not

console.log(myArr.indexOf(3));//it printed the  index of the Element;
//**** */
const newArr=myArr.join;
console.log(newArr);
console.log(typeof newArr);


///Slice ANd Splice

console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3);


/**
 * difference
 * slice:after opertion  the Original Array must not be changed
 * splice:after operation original  array changed 
 */