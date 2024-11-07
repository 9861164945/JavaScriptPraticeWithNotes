const user={

    name:"Sambit",
    price:99,
    welcome:function()
    {
        console.log(`${this.name},welcome`);
        //console.log(this);//Here output comes Current Context
    }

}
// user.welcome();
// user.name="biwas";
// user.welcome()
console.log(this);//Here Output comes {} empty object.


function chai()
{
    let userName="Sambit"
    console.log(this.userName);//thiskwyword works in objct not a  Normal function
}
chai();
//When we use curli braces  Compulsory to  return explictly>>But without curli braces  we can