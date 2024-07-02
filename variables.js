`use strict`;

// console.log('Hello World!');
// console.log(23+97);
// console.log(2+4+6+8+10+12);
// console.log(((4+6+9)/77).toFixed(5))

let a = 10;
// console.log(a);
// console.log(9*a);
let b = 7*a;
// console.log(b);

const MAX = 57;
let actual = MAX-13;
let percentage = actual/MAX;
// console.log(percentage.toFixed(4));
// console.log(5-'arpit');
// console.log(5/0);

// let num = 27 console.log(num);

const string = "The revolution will not be televised!";
// console.log(string);

const name = `Arpit Mishra`;
// console.log(`Hello, ${name}`);

// string methods in the javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);
// console.log(text.charAt(3));
// console.log(text.at(3));

// at() and chatAt() returns the char at particular pos in string, the diff b/w char and at() is that in at() negative index can be used!

console.log(text.slice(0,4));
console.log(text.slice(0,4));

// differance b/w slice() and substring() is that any value less than 0 in start at end pos at substring will treated as 0.
// where as in substr() , second parameter is length of the string.

let num = "78";
console.log(num.padStart(10,"0"));
console.log(num.padEnd(10,"0"));
console.log("Hello Arpit".replace("Arpit","Rajesh"));