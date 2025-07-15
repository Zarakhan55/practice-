//  Question 1: Square the Numbers

let no1=[2,3,4,5,6,7,8,9,10];
let sqr=no1.map(num=>num*num);
console.log(sqr);


//  Question 2: Add Prefix to Names

let name=["zara","zaid","ali"];
let pref=name.map(n=>`hello ${n}`);
console.log(pref);


// Question 3:Extrac only price


let products=[{name:"apple",price:20},{name:"banana",price:1000}];
let price=products.map(prp=>prp.price);
console.log(price);
