// 1. simple Javscript-->

// var funExp = (a, b) => {
//     var total = a + b;
//     return total;
// }
// console.log(funExp(10, 20));

// 2. Function uses-->

// function sum(){
//     var sum = 20+30;
//     return `sum of two number is ${sum}`;
// }
// console.log(sum());

// 3.Array Functionaity-->

// const myFinends = ['Anuj', 'sorabh', 'Kartik'];

// // for (let elements in myFinends){
// //     console.log(myFinends);
// // }
// console.log(myFinends.indexOf("Anuj"));

// add , delete , update functionlity in array->>

// const array = [23,45,67,89,24];
// let newArray = array.shift();
// // push , unshift ,pop ,shift yses to perform ths funvtin

// 4. Splice Method in Array ->>

// ADD--
// let newArray = array.splice(array.length , 0 , 90);
// console.log(array);

// DELETE--
// let newArray = array.splice(3,1);
// console.log(array);

// UPDATE--
// let newArray = array.splice(3,3,101);
// console.log(array);

// 5.challenge create new array mult by 2 AND THOSE WHIO GREATER THAN 10-->>

// const array = [4, 3, 67, 89, 34];
// let newArray = array.map((curElement) => curElement * 2).filter((curElement) => curElement > 10);
// console.log(newArray);

// 6. Rduce Method-->> (also convert 2d array in 1d array with help --> accumalator.concat(currentElelment))

// const array = [5,6,2,13];
// debugger;
// let newArray = array.reduce((accumalator,currentElememt) =>{
//     return accumalator += currentElememt;
// },24)

// console.log(newArray);

// 7. String

// let myName = `whole Day You Doing "javascript" Oh!`;
// console.log(myName);
// let seachStr = myName.search('Day');
// console.log(seachStr);

// SLICE--

// let tweet = "whole Day You Doing javascript Oh!"
// let actualTweet = tweet.slice(0,20);
// console.log(actualTweet);

// REPLACE--

// let str = "whole Day You Doing javascript Oh!"
// let newStr = str.replace('javascript','Database');
// console.log(newStr);


// TRIM

// let str = "   Hello world           ";
// let trimStr = str.trim();
// console.log(trimStr);

// 8. Date and Time-->>

// let curDate = new Date();
// console.log(curDate.toLocaleString());

// 9. Math  Genrate random Number-->>

// console.log(Math.floor(Math.random()*100));

// 10. Object

// const obj1 = {
//     fName : 'anuj',
//     lName : 'Pal',
//     address : {
//         state : 'Haridwar',
//         city : 'Bahadrabad'
//     },
//     getData(){
//         console.log("function caliing...");
//     }
// }
// console.log(obj1.getData());

// 11. Spread Operator {Works both first and second}-->>

// const array = ['blue','pink','red'];
// const secondArray = [...array,'yellow','Green'];
// console.log(secondArray);

// 12. Better Way to flat array in 1D 

//const arrayName = [
//     [12, 34],
//     [56, 66, 34],
//     [56, 43, [23, 44,]],
// ];

// let flatArray = arrayName.flat(Infinity);
// console.log(flatArray);

// 13. object property

// const obj1 = { myName: 'anuj', age: 26 };
// const arObj = Object.entries(obj1);
// console.log(arObj);

// console.log(Object.fromEntries(arObj));

// 14. 'use strict' define execute js code strict Mode 

// 15. PROMISE ASYNC AWAIT 





