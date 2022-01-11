/* eslint-disable no-undef */
const chai = require('chai');
const math = require('../dailyAssignmentTask/math');
// assertion
chai.should();

describe('math', () => {
  it('should calculate total with tip', () => {
    const total = math.calculateTip(10, 0.2);
    total.should.equal(12);
    total.should.be.a('number');
  });
  it('should calculate total with default tip', () => {
    const total = math.calculateTip(10);
    total.should.equal(12.5);
    total.should.be.a('number');
  });
  it('should convert firenheit to celcius', () => {
    const total = math.fahrenheitToCelsius(32);
    total.should.equal(0);
    total.should.be.a('number');
  });
  it('should convert celcius to firenheit', () => {
    const total = math.celsiusToFahrenheit(0);
    total.should.equal(32);
    total.should.be.a('number');
  });
});
