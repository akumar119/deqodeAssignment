// import prompt from 'prompt';);
const prompt = require('prompt');

prompt.start();

function Calculator() {
  let number1;
  let number2;
  this.read = async function () {
    const { num1, num2 } = await prompt.get(['firstNumber', 'secondNumber']);
    number1 = num1;
    number2 = num2;
    console.log('first number is>>>>>', num1);
    console.log('second number is>>>>>', num2);
  };
  this.sum = function () {
    return number1 + number2;
  };
  this.multiply = function () {
    return number1 * number2;
  };
}

const obj1 = new Calculator();

console.log(obj1.sum());
