//Object Destructuring
const user=
    {
        id:101010,
        name:"sonu",
        email:"s@gmail.com"
    }
   
//destructuting object
const {id}=user;
const {name}=user;
const {email}=user;
console.log(id);
console.log(name);
console.log(email);
console.log(user);
//when using react Most of the time We use destructuring The Object.
