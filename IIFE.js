// IIfs Stands For Immediate invoked Function expressions(IIFE);

/**
 * 
 */
(function sonu(){
    console.log(`DateBase Connected`);
}
);



//---------------------------------------------------------------------------------------------------------------------------------
/* Javascript Execution Context: What ever file u created How Js execu=tes it that procedure called Js execution  context
[-Global Execution context//Class Level
This used 

mthod level //Function execution context] //Memory Phase
[-eval execution context
]

->it is divided into Two phase;
1-Memory Execution phase:Here Variable initialized;
2- execution Phase:Here value Executed;

->

1-Global execution
this
2-Memory Phase:
val1=undefined Defalut;
val2=undefined defaulat
addNum()-> defination
res1=undefined;
res2-undefined;

3-Executinon:
val1-10;
val2-20;
addNum->[new varibale environmenat+execution thread]->inside square braces called context

->all the execution phase done at THREAD;
->
*/

let val1=10;
let val2=8;
function addNum(num1,num2){
    let res=num1+num2;
    return res;
}
let res1=addNum(val1,val2);
let res2=addNum(1,2);





