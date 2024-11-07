/*
we can use singlecors and double cors as usal;
we use backtick for injection
 */
let s1="sonu";
let s2='tudu';
let age=23;
console.log(s1+s2+age);
console.log(`my name is${s1} and my gf name is ${s2} and our age is ${age}`);
//obejct
const details=new String('ameerpe-t');
console.log(details[0]);
console.log(details.__proto__);
console.log(details.toUpperCase());
console.log(details.charAt(5));
console.log(details.indexOf('t'));//pass the character in a single quotous
const te=details.substring(0,7);
console.log(te);

const anotherString=details.slice(-8,4);

console.log(anotherString);

const n1="    sadshsnsikjissiinssomsoosf    "  ;
console.log(n1);
console.log(n1.trim());//it removes the starting space and ending space.
 const url="https://sambit.com/sambit%20sawain";
 
 console.log(url.replace('%20','-'));// remove r%20 and place - ;
 console.log(url.includes('sambit'));//check the value present in the url or not;
 console.log(details.split('-'));

 