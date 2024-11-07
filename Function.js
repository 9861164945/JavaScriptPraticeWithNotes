//


function setMyName()
{
    console.log("S");
    console.log("o");
    console.log("n");
    console.log("u");
    

}

// //Function refernce
//setMyName
//Execution
setMyName();
//Inside Function () which value given by user is Called Parameter;
//At the Time Of excution When user input the value at the time of  exection that values are Called argument;
function sum(num1,num2)
{
  console.log(num1+num2);
}
sum(3,"4");//String Concatenation
sum(3,null);//String Concatenation
//Basic
const res=sum(3,6);
console.log(res);//res value Comes Undefined
function sub(num1,num2)
{
 let res1=num1-num2;
 return res1;

}
const res1=sub(3,2);
console.log(res1);
//
function loginUserMessage(username)//Bydefault Value
{
    // if(username===undefined)
    
    if(!username)
    {
        console.error("Please Enter a UserName");
        return 
        
    }
 return `${username} just Logged In`;   //String intropoletion
}
//console.log(loginUserMessage("Sambit"));
console.log(loginUserMessage());
    

