const heroes=["thar","ironMan","SpiderMan"];
console.log(heroes[1]);
const heroes1=["suno","na","Sang","mar","mar"];
heroes.push(heroes1);
console.log(heroes);
//***********Other**********;.   */
//***********Other**********;.*/
//SpiderMan

console.log(heroes[2][0]);
console.log(heroes[2][1]);
console.log(heroes[2][2]);
console.log(heroes[2][3]);
console.log(heroes[2][4]);
console.log(heroes[2][5]);
console.log(heroes[2][6]);
console.log(heroes[2][7]);
console.log(heroes[2][8]); 

console.log("-------------------------");

//Ironman
console.log(heroes[1][0]);
console.log(heroes[1][1]);
console.log(heroes[1][2]);
console.log(heroes[1][3]);
console.log(heroes[1][4]);
console.log(heroes[1][5]);
console.log(heroes[1][6]);

//console.log(heroes[2][9]);

const d1=heroes.concat(heroes1);
console.log(d1);
//Spread Operator
//it works like Concat 
const all_new_heroes=[...heroes,...heroes1];
console.log(all_new_heroes);

//
const newarr=[1,2,3,[7,8,9],91,[12,34,56]];
const usableArr=newarr.flat(Infinity);
//interesting
console.log(Array.isArray("Sambit"));
console.log(Array.from("Sambit"));
console.log(Arrray.from({name:"Sambit"}));//Very Very Interesting

//
let sc=1;
let sc2=2
let sc3=3;
console.log(Array.of(sc1,sc2,sc3));