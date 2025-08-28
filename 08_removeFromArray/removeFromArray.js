const removeFromArray = function (arr, ...args) {
  // let newArr = [];

  // arr.forEach((item) => {
  //   if (!arg.includes(item)) {
  //     newArr.push(item);
  //   }
  // });
  // return newArr;

  return arr.filter((val) => {
    return !args.includes(val);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
