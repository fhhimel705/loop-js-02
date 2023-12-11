/*
********you are given an array
let fruits = ['apple','banana','orange'];
(01)find the index of 'banana' and replace with 'mango'.
(02)remove 'orange' and add 'watermelon'.
*/
let fruits = ["apple", "banana", "orange"];
let indexOfBanana = fruits.indexOf('banana');
console.log(indexOfBanana);
fruits[1] = 'mango';
console.log(fruits);
fruits.pop();
fruits.push('watermelon');
console.log(fruits);