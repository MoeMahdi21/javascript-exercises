const palindromes = function (str) {
  const newStr = str.replace(/[^\w]|_/g, '').toLowerCase();
  console.log(newStr);
  let strReverse = newStr.split('').reverse().join('');
  return newStr === strReverse ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
