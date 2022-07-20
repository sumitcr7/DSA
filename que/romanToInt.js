// Given a string that represents a roman number.
// Convert the roman number to an integer and return it.
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.

function convertRomanToInteger(str) {
  const mapping = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let i = 0;
  let final = 0;
  while (i < str.length) {
    if (mapping[str[i]] < mapping[str[i + 1]]) {
      final = final + mapping[str[i + 1]] - mapping[str[i]];
      i += 2;
    } else {
      final += mapping[str[i]];
      i++;
    }
  }
  return final;
}

console.log(convertRomanToInteger("CCCLXXXIX"));
console.log(convertRomanToInteger("CCCLXXVIII"));
console.log(convertRomanToInteger("XLIV"));
console.log(convertRomanToInteger("XXII"));
console.log(convertRomanToInteger("CVII"));
console.log(convertRomanToInteger("CXVIII"));
console.log(convertRomanToInteger("CLIII"));
console.log(convertRomanToInteger("LXV"));
console.log(convertRomanToInteger("CXXXII"));
console.log(convertRomanToInteger("CLXVIII"));
