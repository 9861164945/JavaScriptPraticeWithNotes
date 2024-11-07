/**
 *  When we Start Our journey in Scope then first Thing Comes Into mind is Let,Var,Const ;
 * Why Let and Const comes ! When Var is Also Woekable;
 * Var has Global Scope  soif we Declare this varibale also insdie a block scope it also can accessable from outSide;
 * 
 * let and const are Block Scope so if we declare the variable as let and const  in  a block the accessable of the varibale only inside that block ;
 */
 
let a=1763;
var b=0o367;
const c=23;


if(true)
 {
     let a=0x10;//these value Scope inside If  scope
     var x=1234;//Var contains Global Scope Concept;
     const c=29;
     console.log("Inside Scope:",a);
     console.log("Inside Scope",b);
     console.log("Inside Scope",x);
     

    //Scope
}
console.log(a);
console.log(b);
console.log(c);
console.log(x);