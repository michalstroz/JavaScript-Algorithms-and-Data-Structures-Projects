function convertToRoman(num) {
  const romans = ["I", "V", "X", "L", "C", "D", "M"],
    ints = [],
    romanNum = [];
  let numeral = "";

  while (num) {
    ints.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (let i = 0, len = ints.length; i < len; i++) {
    numeral = romans[i * 2];
    switch (ints[i]) {
      case 1:
        romanNum.push(numeral);
        break;
      case 2:
        romanNum.push(numeral.concat(numeral));
        break;
      case 3:
        romanNum.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNum.push(numeral.concat(romans[i * 2 + 1]));
        break;
      case 5:
        romanNum.push(romans[i * 2 + 1]);
        break;
      case 6:
        romanNum.push(romans[i * 2 + 1].concat(numeral));
        break;
      case 7:
        romanNum.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNum.push(romans[i * 2 + 1].concat(numeral).concat(numeral.concat(numeral)));
        break;
      case 9:
        romanNum.push(numeral.concat(romans[i * 2 + 2]));
    }
  }
  return romanNum.reverse().join("");
}

convertToRoman(36);
convertToRoman(3999);
convertToRoman(2014);
convertToRoman(798);
convertToRoman(45);
