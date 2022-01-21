/**
 * First Method
 * @param {any number} num
 * @returns factorial
 */
function factorialWithClosure(num) {
  return function calFactorial() {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  };
}
console.log(factorialWithClosure(5)());

/**
 * Second method
 * @param {any number} num
 * @returns factorial
 */
function factorialWithClosure2(num) {
  return num > 0 ? num * factorialWithClosure2(num - 1) : 1;
}
console.log(factorialWithClosure2(5));
