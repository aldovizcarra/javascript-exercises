const reverseString = function (string) {
  let text = string;
  const myArr = text.split("");
  text = "";

  for (let i = myArr.length - 1; i >= 0; i--) {
    text += myArr[i];
  }

  return text;
};

// Do not edit below this line
module.exports = reverseString;
