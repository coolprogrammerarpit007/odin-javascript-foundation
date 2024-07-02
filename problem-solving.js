`use strict`;

// Problem Solving Methadlogy in Javascript

// three steps to solve a problem

// 1. Understand the problem.
// 2. Plan -> ask lot of question regarding your problem like will your application have user interface, where the data will come from will it be entered by the user or come from somewhere else. what functuanilities will be there on UI. what's the desigred output?
// The last question is to write an algorithum to solve the problem
// 3. Divide and conquer -> pick subproblems and start to code

// Break the big problem into smaller ones.

// FIZZ BUZZ Problem


const number = Number(prompt('Enter a number'));

// check the validity of the entered value!
if(isNaN(number) || !number){
    alert(`Enter a Valid Number!`);
}
else{
    for(let i=1;i<=number;i++){
        if(i%3 === 0 && i%5 === 0){
            console.log(`FIZZBUZZ`);
        }
        else if(i%3 === 0){
            console.log(`FIZZ`);
        }
        else if(i%5 === 0){
            console.log(`BUZZ`);
        }
        else{
            console.log(i);
        }
    }
}