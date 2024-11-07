const tinderUser=new Object();
console.log(tinderUser);


//user inserting value at the time of the execution.
const newUser={};
newUser.id="123",
newUser.name="Sambit",
console.log(newUser);
//New Style
const regularUser={
    email:"Sa@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Sambit",
            lastName:"Swain"
        }
    }
}
console.log(regularUser.fullName);

//newType Object;combine object;
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
    
    
}


// const T2=object.assign(target,source);
//this  is the formula for this 
//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2);
//empty parenthesis not compulsory;



//actual use
//Using Spread operator it is the latest Technology;

const obj3={...obj1,...obj2};
console.log(obj3);


//
const  user=[
    {
        id:01,
        email:"ss@gmail.com"
    },
    {
        id:4,
        email:"sds@gmail.com"
    },
    {
        id:3,
        email:"ses@gmail.com"
    },
    {
         id:2,
        email:"sst@gmail.com"
    },
    ];
    console.log(Object.keys(user));
    console.log(Object.values(user));
    console.log(Object.entries(user));
 