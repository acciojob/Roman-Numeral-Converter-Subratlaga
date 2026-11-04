function convertToRoman(num) {
  const obj = {
    0: ["M", 1000],
    1: ["D", 500],
    2: ["C", 100],
    3: ["L", 50],
    4: ["X", 10],
    5: ["V", 5],
    6: ["I", 1]
  };

  const romanNumerals = [
    obj[0], ["CM", 900],
    obj[1], ["CD", 400],
    obj[2], ["XC", 90],
    obj[3], ["XL", 40],
    obj[4], ["IX", 9],
    obj[5], ["IV", 4],
    obj[6]
  ];

  let result = "";

  for (const [symbol, value] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

module.exports = convertToRoman;