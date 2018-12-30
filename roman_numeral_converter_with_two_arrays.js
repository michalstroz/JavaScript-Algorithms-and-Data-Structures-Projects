function convertToRoman(num) {
  const decNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let numeral = "";

  for (let i = 0, len = decNum.length; i < len; i++) {
    while (decNum[i] <= num) {
      numeral += romNum[i];
      num -= decNum[i];
    }
  }
  return numeral;
}

convertToRoman(36);
convertToRoman(3999);
convertToRoman(2014);
convertToRoman(798);
convertToRoman(45);
