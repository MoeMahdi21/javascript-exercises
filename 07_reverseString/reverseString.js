const reverseString = function (str) {
  // let strArray = str.split('');
  // let reverseString = [];

  // for (let i = strArray.length - 1; i != -1; i--) {
  //   reverseString.push(strArray[i]);
  // }

  // return reverseString.join('');

  return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
