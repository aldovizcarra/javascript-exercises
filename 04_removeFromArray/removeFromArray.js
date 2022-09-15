const removeFromArray = function (arr1, ...manyMoreArgs) {
  outer: for (let i = 0; i < manyMoreArgs.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (manyMoreArgs[i] === arr1[j]) {
        arr1.splice(j, 1);
        continue outer;
      }
    }
  }

  return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
