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

module.exports = {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
