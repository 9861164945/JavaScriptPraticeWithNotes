
// //Normal if-else
const s=prompt("Enter a numbeR:");
if(s!=0)
{
    consloe.log("S is present")
    
}
else{
    console.log("S is not there")
}
const  isUserLoggedIn=prompt("Enter true or False ");
if(isUserLoggedIn==true)
{
    console.log("User Login SuccessFull;")
    
}
else{
    alert("Invalid User!")
}
//=->>>It is used for assigninng a value
//==->>>it is used for checking equality; 
//===->>it is used for checking equality with datatype; 

//Temp program Checker
const temp=prompt("Enter temp");
if(temp<=50){
    console.log("Temperatue is less than 50:");
}
else{
console.log("Tempreature is greater than 50:")    
}
///Score
const score=prompt("ENter Score:");
// but if we  declare in class level or global scope then we can call it in any condition
const stu=prompt("ENter your name:");
if(score>100)
{
    const power="You are Unstopable:"
    console.log(`${stu} Score in between 100 only! ${power} `);
    
}
else{
    // console.log(`Your Score is ok: ${power}`);// this line not executed because it has block acope but use like global scope

    console.log(`${stu} Your Score is Ok:`);
    
}

//Debit Card
const bal=prompt("Enter balance:");
const cust_name=prompt("Enter name:");
const min=500;
const for_Debit_card=10000;
if(bal<500 && bal>0)
{
    console.log(`${cust_name} your balance ${bal} is less than a minimum ${min} amt`);
}
else if(bal>=500)
{
    console.log(`${cust_name} your balance ${bal} is ok But  if u need A debit card  ur balance ammout should greater than ${for_Debit_card} :`);
}
else{
    console.log(`${cust_name} your balance ${bal} Is not sufficient you have to deposit  minimum${min} amt`);
}
//Shopping 
const userLoggedIn=prompt("ENter  your Log in status:");
const debitCard=prompt("do you have A debit card:");
if( userLoggedIn=='yes'&&debitCard=='yes')
{
    console.log("Allow to buy  course");
    
    
}
else{
    console.log("Not Allowed!");
}


/* truthy and falsy values
 truthy:
 --------
 those who are present in the data type except falsy values.
 "O"-->Inside a string  so it is a truthy val.
 " "-->inside a string space it is a truthy val.
 {}-->object
 []->>array
 function(){}-->> truthy
 

Falsy:
------
false,0,-0,Bigint 0n,""(empty String),null(declaree as null),undefined(declared but not assigned),Nan(not a number)


*/
const userEmail=prompt("Enter user Email:");
if(userEmail){
console.log(`${userEmail} present`);    
}
else{
    console.log(`${userEmail} not preesent`);
}