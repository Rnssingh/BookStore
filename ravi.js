

// let arr = [1,2,3,4,5,6,8];

// import { useState } from "react";

// const { closeSync } = require("fs");

// const { ftruncate } = require("fs");

// const { json } = require("body-parser");
// Before (CommonJS)
// const fs = require('fs');
// const inquirer = require('inquirer');
// const generateTeam = require('./src/template.js');

// After (ES Modules)
// import fs from 'fs';
// import inquirer from 'inquirer';
// import generateTeam from './src/template.js';



// arr.pop();
// arr.shift();
// arr.unshift(...[7]);
// let even = arr.map(n => n + 2);
// let even = arr.filter(n => n % 2===0);

// console.log(even);


// const users = [
//   { name: "Ravi", age: 25 },
//   { name: "Aman", age: 17 },
//   { name: "Nita", age: 20 },
// ];

// const adults = users.filter(users => users.age >= 18);
// console.log(...adults);



// const items = [1,2,2,3,2,4,4,5,6,7,6,7];
// const result = items.filter((val, i, arr) => arr.indexOf(val) === i);
// console.log(result);


// const nested = [[1,2], [3,4,5], [6]];
// const flat = nested.reduce((acc, val) => acc.concat(val), []);
// console.log(flat); 


// const entries = [
//   { key: 'name', value: 'John' },
//   { key: 'age', value: 25 }
// ];

// const obj = entries.reduce((acc, item) => {
//   acc[item.key] = item.value;
//   return acc;
// }, {});

// console.log(obj); 


// const user = { name: "Aryan", age: 22, city: "Varanasi" };

// console.log(Object.keys(user)); 
// console.log(Object.values(user)); 
// console.log(Object.entries(user)); 


// const scores = { math: 85, science: 90, english: 78 };
// Object.keys(scores).forEach(key => {
//     console.log(`${key.toUpperCase()}:${scores[key]}`)
// })


// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach((fruit, index) => {
//     console.log(`${index}: ${fruit}`);
// });


// const nums = [1,2,3,4,5];
// nums.forEach((val, i, arr) => {
//     arr[i] = val * 2;
// });
// console.log(nums);


// const promise = new Promise(resolve => {
//     setTimeout(() => resolve("hello, Aryan"), 2000);
// });
// promise.then(result => console.log(result));


// function greet(name){
//     console.log("Hello", name);
// }
// setTimeout(greet, 2000, "Aryan singh");



//async and await functions

// function wait(nums){
//     return new Promise(resolve => setTimeout(resolve, nums));
// }
// async function loadData(){
//     console.log("Loading........");
//     await wait(1000);
//     console.log("Done!........")
// }
// loadData();

// const arr = [1,2,3,4,5,2,1,49,7];


// const arr = ['a','c','r','e'];

// function lastEle(arr){
//     return [(arr[arr.length - 1])];
// };
// console.log(lastEle(arr));


// let a = [1,2,3];
// let b = [4,5,6];
// let c = ['a', 'b', {}, null];

// function conbine(){
//     return a.concat(b,c);
// }
// console.log(conbine());

// console.log(Math.floor(Math.random()*19));


// function countNum(){
//     for(let i = 1; i <= 100; i++){
//         setTimeout(() =>{
//             console.log(i);
//         },i*1000);
//     };
// };
// countNum();


// const nums = [5,12,8,111,44];
// const max = nums.reduce((a, b) => (a > b ? a:b));
// console.log(max);


// let arr = [
//     {name: "Aryan", sex: "Male"},
//     {name: "Ravi", sex: "Male"},
//     {Name: "srutii", sex: "Femal"},
// ];
// const result = arr.filter(obj => obj.sex === 'Male');
// console.log(...result);


// let obj = {
//     key: "value",
// };
// function checkObj(obj){
//     let isEmpty = Object.keys(obj).length < 1;
//     if(isEmpty){
//         return "Object is Empty"; 
//     }else{
//         return "Object is not empty";
//     };
    
// };
// console.log(checkObj(obj));


// Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

// let arr = [1, [2, 3], 4, 'b',[4,11, [23,27]]];

// let result = arr.flat();
// console.log(result);

//Write a function that checks if all elements in an array are numbers.

// let arr = [1,2,3,4,5,'a'];
// // const checknum = arr => arr.every(e => typeof e === "number");

// function checknum(arr){
//     return arr.every((e) => {
//         return typeof e=== "number";
//     })
// }
// console.log(checknum(arr));

// Build a simple isPrime() function to check if a number is prime.

// function isPrime(num){
//     if(num < 2) return "Not a Prime Numbers";

//     for(let i = 2; i < Math.sqrt(num); i++){
//         if(num % i === 0) return "Not a Prime Numbers";
//     }
//     return "It is Prime Numbers";
// };
// console.log(isPrime(10));

//15. Create a function that removes duplicate values from an array.

// let arr = [1,2,3,3,2,3,4,5,4,4,6,7,6,7,8,5,6,8,6,9,10,9,11,12];
// function dupValue(arr){
//     // return arr.reduce((acc, val) => {
//     //     if(!acc.includes(val)) acc.push(val);
//     //     return acc;
//     // }, []);

//     let result = arr.filter((element, index) => {
//         return arr.indexOf(element) === index
//     })
//     return result;
// }
// console.log(dupValue(arr));

//16. What’s the difference between parseInt and Number()?
//17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?

// let sum = (0.1 + 0.2).toFixed(1);
// console.log(sum);

//21. Create a function that reverse each word of a given sentence. E.g., Mai hun


// function reverseWord(sentence){
//     return sentence
//     .split(" ")
//     .map(word =>word.split("").reverse().join(""))
//     .join(" ");  
    
// }
// console.log(reverseWord("My name is Aryan"))


//22 22. In an array of numbers and strings, only add those numbers which are not strings.

// let arr = [1,2,3,4,5,'s', {}, 'a', null];
// let sum = 0;

// arr.forEach(item => {
//     if(typeof item === 'number'){
//         sum += item;
//     }
// })
// console.log(sum);

//Write a JavaScript function that reverse a number.

// function reverseNumber(num){
//     return Number(num.toString().split('').reverse().join(''))
// }
// let reverse = reverseNumber('24523454')
// console.log(reverse)

//25. Write a javascript function that returns a passed string with letters in alphabetical order.


// let string = "Aryan";

// function sortInt(str){
//     return (str.split('').sort().join(''))
// }
// console.log(sortInt(string));

/*26. Write a Javascript function that accepts a string as a parameter and conversts the first
letter of each word of the string in upper case. */

// let string = "aryan singh kya hal hai";

// function firtsCapital(str){
//     let resultArr = string.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     return resultArr.join(' ');
// }
// console.log(firtsCapital(string));

/*27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will
return the first 'n' elements of the array. */

// function firstElements(arr, n) {
//   if (n == null) return arr[0];      // return single first element
//   return arr.slice(0, n);            // return first n elements
// }
// console.log(firstElements([1, 2, 3, 4, 5]));
// console.log(firstElements([1, 2, 3, 4, 5], 3)); 
// console.log(firstElements(["a", "b", "c"], 2)); 


// OOPs

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hello, I am ${this.name}`);
//     }
// }
// const user = new Person("Alice", 25);
// user.greet();


//29. write a javascript program to find the most frequent item of an array.


//30. write a javascript program to shuffle an array.




// for(let i in arr){
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     // let temp = arr[i];
//     // arr[i] = arr[randomIndex];
//     // arr[randomIndex]= temp;
//     [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]]
// }
// console.log(arr);

// function randSufles(arr){
//     for(let i in arr){
//          let randomIndex = Math.floor(Math.random() * arr.length);
//          let temp = arr[randomIndex];
//          arr[randomIndex] = arr[i];
//          arr[i] =  temp;
//     }
//     return arr;
// }
// console.log(randSufles(arr));



//oops concept ------------


// function divide(a, b){
//     if(b === 0) throw new Error("Division by zeros");
//     return a/b;
// }
// try{
//     console.log(divide(10, 0));
// }catch(err){
//     console.log("Error:", err.message);
// }

//  Laxical  Scope in js---------
// const globalVar = "W";

// function outer(){
//     const outerVar = "Wa";
//     console.log("Aryan");

//     function inner(){
//         const innerVar = "Wal";
//         console.log(globalVar);
//         console.log(outerVar);
//         console.log(innerVar);
//     }
//     inner();
// }
// outer();

//  Closures & Lexical Scope-------------
// function outer(){
//     const name = "Shiva";
    
//     return function inner(){
//         console.log(`My name is ${name} `);
        
//     }();
// }
// // const greet = outer();
// // greet();
// outer();


// const user = {
//     name:"Shivam",
//     greet: function(){
//         console.log("Hello," + this.name);
//     }
// };
// user.greet();


// const user = {
//     name:"Shivam",
//     greet(){
//         const arrow = () => console.log("Thia is my name," + this.name);
//         arrow();
//     }
// };
// user.greet();

//Test Event loop ----------------------

// console.log("Script start");

// setTimeout(() => {
//   console.log("Macrotask - setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Microtask - 1");
// });

// Promise.resolve().then(() => {
//   console.log("Microtask - 2");
// });
// console.log("Script end");


// const user = {
//     name: "Shiva",
//     age:22,
//     password:"123aryan"
// };
// const result = JSON.stringify(user, (key, value) => {
//     if(key === "password") return undefined;
//     return value;

// });
// console.log(result);

// function delay(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Done after 2 second");
//         }, 2000);
//     });
// }
// async function run(){
//     console.log("Aryan singh");
//     const result = await delay();
//     console.log(result);
// }
// run();

// async function add(a, b){
//     return a + b;
// }
// add(5, 3).then(result => console.log(result));

//  arror functions------------
// const shop = {
    
//     // purchase: function(){  
//     //     console.log(this);
//     // },

//     purchase:()=>{
//         console.log(this);
//     }

//     // purchase(){
//     //     console.log(this);
//     // }

// };
// shop.purchase();

 
//Template Literals --------

// const name = "Aryan"
// const names = `My name ${name}
// singh rajput`;

// console.log(names);


//(101) Object Literals ------------
//Computed Property keys

// const keyName = 'name';

// const product = {
//     [keyName]: 'Kushii',
//     price: 100,
// };
// console.log(product);


//Methode Defination shorthand


// const product = {
//     // buy:function(){
//     //     console.log('Bought');
//     // }

//     buy() {
//         console.log('Bought')
//     }
// };
// product.buy();


//Property Shorthand

// const accessToken = 'Aryan123';
// const refreshToken = '124567';

// const user = {
//     // accessToken:accessToken,
//     // refreshToken:refreshToken,

//     accessToken,
//     refreshToken,
// };
// console.log(user);


//Destructuring ------------ 

// const user = {
//     name:'Aryan singh',
//     age: 22,
// };
// // console.log(user.name);
// const{name:fullName,age} = user;
// console.log(age);


// const data = ['Rakesh', 30, 'Engineer']
// // console.log(data[1]);

// const[name, age, profession] = data;
// console.log(profession);


//  Default Parameter ------------

// const register = (name, password, image = 'test.png') => {
    
//     console.log(name, password, image);
    
// };
// register('Aryan', 'Secret', 'Photo.png');


//Spread... ------------------__________------

// const languages = ['c', 'c++', 'javascript'];

// const newLang = ['Typescript',...languages];
// console.log(newLang);


// const settings ={
//     volumn: 10,
//     brightness: 70,
// };
// const newSettings = {...settings, volumn:20 ,contrast: 50};

// console.log(newSettings);


//Rest...  --- convert all parameter in array formate----

// const addItems = (...items) => {
//     console.log(items);
// };
// addItems(3,4,5,7,8,13,15);


// for of loop
//Arrya, String, Object, Set, Map ----

//   const number = [2,4,5,7];
  
//   for(let num of number){
//     console.log(num);
//   }


// const language = 'javascript';

// for(let char of language){
//     console.log(char)
// }


// const person = {
//     name:'Aryan',
//     city:'Berlin',
//     age: 22,
// };
// for(let entries of person){
//     console.log(entries);
// }
// for(let entries of Object.entries(person)){
//     console.log(entries);
// }
// for(let [key, value] of Object.entries(person)){
//     console.log(key, value);
// }


//Promises -------------


// function login(callbacks){
//     setTimeout(() => {
//         console.log('Login ...🎈 2 steps');
//         callbacks();
//     },1000);
// }
// login(callbacks => {
//     console.log("Aryan singh... 3 steps");

// });
// console.log("1 setps")


// function login(){
//     return new Promise((reject, resolve) => {

//         setTimeout(() => {
//             console.log('Login....🎈');
//             reject();
//         },0);
//     });
    
// }
// login().then(() => {
//     console.log('1 steps...');
// //.then(() => console.log('1 steps...'))  
    
// }).catch((err) => {
//     console.log("Error")
// });
// //.catch((err) => console.log("Error")) 



// find(Array methods) ----------------

// const users = [{name: 'Aryan'}, {name:'john'}];

// const user = users.find((user) => {
//     return user.name === 'Aryan';
// });
// console.log(user);

// Set find uniqe set

// const numbers = [4,5,6,7,4,6];

// const uniqeNum = new Set(numbers);
// console.log(Array.from(uniqeNum));



//--------------Map(Harshtable)--------

// const urls = new Map();
// urls.set('developement', 'dev5555.com');
// urls.set('possitions', 'Softwere');

// console.log(urls.get('possitions'));


// const urlObj = {
//     development: 'dev.examples.com',
//     production: 'Aryan.examples.com',
// };
// console.log(urlObj.development);


//----------- Classes -----------  
//old ---

// function Person(name){
//     this.name = name;
// }
// const rakesh = new Person('Rakesh');

// console.log(rakesh);

//New ----

// class Person {
//     name;

//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log('Good Morning')   
//     }
// }
// const rakesh = new Person('Rakesh');
// console.log(rakesh.greet());



// function CartCounter(){
//     let _count = 0;

//     function _updateCount(val){
//         _count += val;
//     }

//     return{
//         increment(){
//             _updateCount(1);
//         },
//         decrement(){
//             _updateCount(-1);
//         },
//         value(){
//             return _count;
//         },
//     };
// }
// const result = CartCounter();
// result.increment();
// result.increment();
// result.increment();
// result.decrement();
// console.log(result.value());



//useState -------

// const name = "Shiva";
// console.log("My name is:", name);

// const obj = { age: 25 };
// console.log("User Info:", obj);


//--------- Valid parentheses ----DSA Problems-----


// function isValid(s){
//     const stack = [];
//     const map = {
//         ')':'(',
//         '}':'{',
//         ']':'['
//     };

//     for(let char of s){
//         if(char === '('|| char === '{' || char === '['){
//             stack.push(char); //push only opening Brackets
//         }else{
//             if(stack.pop() !== map[char]){
//                 return false;  //mismatch output
//             }
//         }
//     }
//     return stack.length === 0;
// }
// console.log(isValid("("));

































































































































































































































































































































































































































































