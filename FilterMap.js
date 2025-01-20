//Filter Map and 
const nums=[1,2,3,4,5,67,8,8,8,8,888,90];
const filterNum=nums.filter(num=>{
    return  num>4;//here output comes whioch numnbers are greater than 4
})
console.log(filterNum);
console.log(nums);
//Same using Foreach
const newNums=[];//Here i Declare an empty array
nums.forEach((num)=>{
    if(num>=8){//according the condition i have given i check and push into a new Array
        newNums.push(num);
    }
})

console.log(newNums);


//filter are mostly used in Ecommerce Website 
//Here i  created an object of type jsoin which are storeed in database
const books=[
    {title:"Java",Author:"James Goshling",publish:1995},
    {title:"JavaScript",Author:"Brenden Eich",publish:1995},
    {title:"React",Author:"Jorden walke",publish:2011},
    {title:"Node",Author:"Riyan Dhal",publish:2009},
    {title:"Express",Author:"TJ Holowaychuk",publish:2012},
    {title:"Python",Author:"Guido van Rossum ",publish:1991},
    {title:"C",Author:"Denish Richiee",publish:1992},
    {title:"Html",Author:"Berners Lee",publish:1989},
    {title:"Css",Author:"Håkon Wium Lie",publish:1994},
    {title:"TypeScript",Author:"Anders Hejlsberg",publish:2012},
    ]
    console.log(books);
    const userBooks=books.filter(bk=>bk.publish>=1993);
    console.log(userBooks);
    
//Reduce method uses cases
const numbers=[1,2,3,4];
//Use reduce using Normal unction
const myTotal=numbers.reduce(function(acc,cval){
    console.log(`acc${acc} and curentvalue ${cval}`);
    return acc+cval
},0);//12
console.log(myTotal);10
//Use Reduce using ArrowFunction
const myTotal2=numbers.reduce((acc1,val)=>{
    console.log(`acc${acc1}and curent Value is${val}`);
    return acc1+val
},1);
console.log(myTotal2);//10

//shopping cart Example
const shoppingCart = [
  { i: "java", p: 890 },
  { i: "javaScript", p: 8989 },
  { i: "python", p: 890 },
  { i: "typescript", p: 890 }
];

const price = shoppingCart.reduce((acc, item) => acc + item.p, 0);
console.log(price);
