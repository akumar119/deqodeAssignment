// const passwordPattern = /^[^-.!][a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+[^-!.]$/;
// console.log(passwordPattern.test('ami--t'));
// const emailRegex = /\w{0,}@[^@]\w{0,}.\w{0,}/;
// console.log(emailRegex.test('amit@@@mail.@com'));

const { response } = require("express");
const { optional } = require("joi");
const { model } = require("mongoose");

// const paraGraph = 'Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.';
// const regex = /\d{10}|\(\+91\)-\d{5}-\d{5}|\w{0,}@[^@]\w{0,}.\w{0,}/g;
// const result = paraGraph.match(regex);
// console.log('result>>>>>', result);
/**
 * practice on setTimeOut function
 */
// console.log('hello world1');
// setTimeout(() => {
//   console.log('hello world2>>>');
// }, 2000);
// console.log('hello world3>>>');

/**
 * practice on promises chaining
 */
// const arr = [10,50,20,40,90];

// // find the max with reduce funcion
// const sum = arr.reduce((accumulator, currentValue) => {
//   if (accumulator < currentValue) {
//     accumulator = currentValue;
//   }
//   return accumulator;
// }, 0);
// console.log(sum);

// make reduce
// const arr1 = [-3, -7, 0, 2, 5, 7];
// const filterArr = arr1.filter((elem) => elem > 0);
// console.log(filterArr);
// const data = filterArr.map((elem) => elem * 2);
// console.log(data);
// // use reduce
// const result = arr1.reduce((previousValue, currentValue) => {
//   if (currentValue > 0) {
//     previousValue.push(currentValue * 2);
//   }
//   return previousValue;
// }, []);
// console.log(result);

// const obj = {
//   a: 4,
//   b: 6,
// };
// const keys = Object.keys(obj);
// const values = Object.values(obj);// that is a features of es8
// const entries = Object.entries(obj);// that is also es8 features

// Define the closure
// const makeCounter = function () {
//   let privateCounter = 0; // private variables
//   function changeBy(val) { // private methods
//     privateCounter += val;
//   }
//   return {
//     increment: () => {
//       changeBy(1);
//     },
//     decrement: () => {
//       changeBy(-1);
//     },
//     value: () => {
//       return privateCounter;
//     },
//   };
// };
// const counter1 = makeCounter();
// counter1.increment();
// console.log(counter1.value());
/**
 * call, bind and apply function
 */
const name = {
  firstName: 'amit',
  lastName: 'Kumar',
};

const name2 = {
  firstName: 'sachin',
  lastName: 'kumar',
};
const fullName = function (city, state) {
  console.log(this.firstName + " " + this.lastName + " " + "from " + city + "," + state);
};
// function borrowing
fullName.call(name2, 'sitamarhi', 'bihar');
fullName.call(name);
