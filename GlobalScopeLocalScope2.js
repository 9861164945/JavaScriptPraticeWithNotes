/**
 * Nested Scope
 * 
 */
function One(){
    const UserName="Smabit"
    function Two(){
        const website="Github"
        console.log(UserName);

    }
   // console.log(website);//Error We can not access it...

Two();
}
One();