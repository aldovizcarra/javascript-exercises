const ftoc = function (temp) {
  const celsius = ((temp - 32) * 5) / 9;
  const roundedC = Number(celsius.toFixed(1));
  return roundedC;
};

const ctof = function (temp) {
  const fahrenheit = (temp * 9) / 5 + 32;
  const roundedF = Number(fahrenheit.toFixed(1));
  return roundedF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
