const score=400;
const balance=new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));//basically Used for Ecommerce Website
const on=123.890;
console.log(on.toPrecision(3));

const on2=100000;
console.log(on2.toLocaleString('en-In'));//Comma btn the zero\
//********************Math****************** */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(6.8));
console.log(Math.floor(9.7));


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));//it also return After decimal;
console.log(Math.ceil(6.8));//After 6.1 op comes 7
console.log(Math.floor(9.7));//op 9 beacues it returns min value also it retunr Single digit;
 
console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));

//************//
const min=100;
const max=200;
console.log(Math.floor(Math.random()*(max-min+1))+min);