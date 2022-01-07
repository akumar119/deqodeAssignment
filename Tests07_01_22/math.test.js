/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { calculateTip } = require('../RANDOMTASK/math');

test('should calculate total with tip', () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});
// test('firstTest', () => {

// });
// test('test shoulb be fail', () => {
//   throw new Error('test fail');
// });
