const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.output,
});
// console.log('hi');
rl.setPrompt('What is your age? ');
rl.prompt();
rl.question('Enter first number: ', (firstNumber) => {
  console.log('fis', firstNumber);
  rl.close();
  // const num1 = parseInt(firstNumber, 10);
//   r1.question('enter operator:', (op) => {
//     r1.question('enter second number:', (number2) => {
//       const num2 = parseInt(number2, 10);
//       if (op === '+') {
//         console.log('result is', num1 + num2);
//       } else {
//         console.log('result is', num1 + num2);
//       }
//     });
//   });
});
