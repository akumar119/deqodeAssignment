const calculateTip = (total, tipPercent = 0.25) => {
  const tip = total * tipPercent;
  return total + tip;
};

const fahrenheitToCelsius = (temp) => {
  const result = (temp - 32) / 1.8;
  return result;
};

const celsiusToFahrenheit = (temp) => {
  const result = (temp * 1.8) + 32;
  return result;
};

const add = async (a, b) => {
  setTimeout(() => {
    if (a < 0 || b < 0) {
      throw new Error('a and b must be positive.');
    } else {
      return a + b;
    }
  }, 2000);
};

module.exports = {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
};
