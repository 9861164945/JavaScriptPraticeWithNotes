
//printing array using for loop after addition of custom input
let myNewArr=[1,2,3,4,5];
undefined
for(let v in myNewArr){
    if(myNewArr.hasOwnProperty(v)){
       console.log(v);}}
//Using of For Each sde2 and sde3 also adding after custom input using hasownnpeoperty
Array.prototype.customForEachTwon=function(callback,thiscontext){
    if(typeof callback!=='function'){
        throw `this is not a function`
    }
    const length=this.length
    let i=0
    while(i<length){
        if(this.hasOwnProperty){
            callback.call(thiscontext,this[i],i,this);
        }
        i++;
    }
    
}


