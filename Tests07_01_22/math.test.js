/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const {
  calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add,
} = require('../RANDOMTASK/math');

test('should calculate total with tip', () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test('should calculate total with default tip', () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test('should convert firenheit to celcius', () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test('should convert celcius to farenheit', () => {
  const temp = celsiusToFahrenheit(0);
  expect(temp).toBe(32);
});
// failed test case
test('add function', async () => {
  const sum = await add(10, 20);
  expect(sum).toBe(30);
});

// test('firstTest', () => {

// });
// test('test shoulb be fail', () => {
//   throw new Error('test fail');
// });
