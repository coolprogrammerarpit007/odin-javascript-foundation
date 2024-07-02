`use strict`;

// functions in JavaScript

const array = [`I`, `love`, `choclate`, `frogs`];
let str = array.join(` `);
// console.log(str);

// default parameter
const greeting = function (wish = "Nice to meet you ") {
  return `${wish}`;
};

// (function(){
//     console.log('Full Stack Devlopment!');
// })() // Anonmous function in JavaScript

// console.log(greeting('How are you'));
// console.log(greeting());

// const sumNumbers = (num1,num2)=>{
//     return num1 + num2;
// }

// console.log(sumNumbers(75,25));

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const numberMultiplyByTwo = numbers.map((num) => num * 2);
// console.log(numberMultiplyByTwo);

// functional scope
// const x = 1;

// function a() {
//   const y = 2;
// }

// function b() {
//   const z = 3;
// }

// console.log(x);// global scope
// console.log(y);  // local scope throws an error
// console.log(z);  // local scope throws an error

function hello(){

  if(true){
    var a = 'JavaScript';
    let b = 'c++';
    const c = `python`;
    console.log(a);
    console.log(b);
    console.log(c);
  }

  console.log(`Outside of the If statments`);
  console.log(a); // will print JavaScript as variable declared by var has fuctional scope
  console.log(b);// throws refrence error 
  console.log(c);
}

// hello();

if(true){
  var a = 'NodeJS';
  let b = 'JAVA';
  const c = `GO`;
  // console.log(a);
  // console.log(b);
  // console.log(c);
}

console.log(`Outside of the If statments`);
console.log(a);
// console.log(b); // will throws an error
// console.log(c) ; // will throws an error


// JavaScript Call Stack
// A call stack is a way in javascript engine which keeps track of a place in code which calls multiple functions,
// it has the information about which function is currently running and which function invoked within the function.

function add7(number){
  return number + 7;
}

function multiply(num1,num2){
  return num1*num2;
}

function capitalize(str){
  str = str.toLowerCase();
  let firstLetter = str[0];
  str = firstLetter.toUpperCase() + str.slice(1);
  return str;
}

// console.log(capitalize('ARPIT'));
// console.log(capitalize('aRpItM'));

function lastLetter(str){
  return str[str.length-1];
}

console.log(lastLetter('novak'));
// console.log(add7(14));
// console.log(multiply(25,10));