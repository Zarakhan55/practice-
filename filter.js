// ///Filter question

// Question: Given an array of users, return only users who are 18 or older.

const users=[{name:"zara",age:20},{name:"john",age:17},{name:"alice",age:22},{name:"bob",age:16}];
const adult =users.filter(user=>user.age>=18);
console.log(adult);

// Question: Remove all null, undefined, and empty values from an array.

const mixArray=[1111111,undefined,null,0,"hello",false,"",NaN,9999];
const filAray=mixArray.filter(item=>item);
console.log(filAray);
 //Question: From this array, return names longer than 4 characters.


const names=["zara","zaid khan","ali haideer","john doe","farh","ali"];
const check=names.filter(name=>name.length>=5);
console.log(check);


//  1. Filter Even Numbers

let number=[2,3,4,5,6,7,8,9,10];
let even=number.filter(num=>num%2===0);
console.log(even);

// 1. Filter odd Numbers

let numbers=[1,2,3,4,5,6,7,8,9,10,11];
let odd=numbers.filter(num=>num %2==!0)
console.log(odd);


// Filter positive Numbers
let num=[-1,-2,-3,-4,8,9,10,4];
let positive=num.filter(num=>num>0);
console.log(positive);

//filter negative values
let nums=[-1,-2,-4,8,9,5,-99];
let neg=nums.filter(num=>num<0);
console.log(neg);

//filter  numres greater than 5
let num1=[1,7,2,3,5,6,9,10];
let ger=num1.filter(num=>num>=5);
console.log(ger);

//filter numbers less  than 5
let no=[2,3,1,0,4,55,77];
let les=no.filter(num=>num<=5);
console.log(les);

``