const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
// console.log('hi');
// rl.setPrompt('What is your age? ');
// rl.prompt();
rl.question('Enter first number: ', (firstNumber) => {
  // console.log('fis', firstNumber);
  const num1 = parseInt(firstNumber, 10);
  rl.question('enter operator:', (op) => {
    rl.question('enter second number:', (number2) => {
      const num2 = parseInt(number2, 10);
      if (op === '+') {
        console.log('sum is = ', num1 + num2);
        rl.close();
      } else if (op === '-') {
        console.log('diference is = ', num1 - num2);
        rl.close();
      } else if (op === '*') {
        console.log('multiply is = ', num1 * num2);
        rl.close();
      } else if (op === '/') {
        console.log('division is = ', num1 / num2);
        rl.close();
      } else {
        console.log('Please enter a valid operation!');
        rl.close();
      }
    });
  });
});
