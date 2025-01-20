/*
For Of 
:
It is also a enhanced for loop
 */ 

const  nums=[1,2,3,4,5];
for(let num of nums)
{
    console.log(`Each Index Value is ${num}`);
}
const greetings="Hey I am Here Good afterNoon everyone"
for(let greet of greetings)
{
    console.log(`Each Index Value is ${greet}`);
}
/**
 * Map;it is an Object
 */
const porg=["dsa","java","dsa","java","dsa","java"];
for(const key in porg){
    console.log(porg[key]);
}

//ForEach

/**
 *  foreach is a method which takes another anonymous functiuon as a parameter
 * ex.:arr.forEach(function(val){console.log(val)})
 * ex with Arrow Function: Arr.forEach((i)=>{console.log(i)});//using arrow function as a para meter
 * we have to give the reference of that function do not give the execution process;
 * inside foreach method(item,index,full arrray); output comes array elemt,arr index and total array;f
Example:
-------
*/

const customer=[{id:123,name:"Sonu"},{id:124,name:"scott"},{id:121,name:"smith"}];
customer.forEach((item)=>{

    console.log(item.id);
    console.log(item.name);
});


const students=[{
roll:"s101",
name:"Dilip"   
},
{
    roll:"s102",
    name:"Ready"
},
{roll:"s120",name:"Blake"}];
students.forEach( (st,index,arr)=>{console.log(st.name)
    console.log(st.roll);
    console.log(index);
    console.log(arr);

});//uses of Higher Order Function