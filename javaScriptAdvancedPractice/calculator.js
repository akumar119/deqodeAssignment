// import prompt from 'prompt';);
const prompt = require('prompt');

prompt.start();

function Calculator() {
  let number1;
  let number2;
  this.read = async function () {
    const { firstNumber, secondNumber } = await prompt.get(['firstNumber', 'secondNumber']);
    number1 = firstNumber;
    number2 = secondNumber;
    // console.log('first number is>>>>>', num1);
    // console.log('second number is>>>>>', num2);
  };
  this.sum = function () {
    return number1 + number2;
  };
  this.multiply = function () {
    return number1 * number2;
  };
}

const obj1 = new Calculator();
obj1.read();
// console.log(obj1.sum());
// console.log(obj1.multiply());
