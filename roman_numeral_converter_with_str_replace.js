function convertToRoman(num) {
  const romans = [
    ["I", "V"],
    ["X", "L"],
    ["C", "D"],
    ["M"]
  ];

  let numeral = "";

  const ints = num.toString().split("").reverse().map((val) => parseInt(val));

  for (let i = 0, len = ints.length; i < len; i++) {
    numeral = romans[i][0].repeat(ints[i]) + numeral;

    if (romans[i][1]) {
      numeral = numeral.replace(romans[i][0].repeat(5), romans[i][1])
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + (romans[i + 1][0]))
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }

  }

  return numeral;
}

convertToRoman(36);
convertToRoman(3999);
convertToRoman(2014);
convertToRoman(798);
convertToRoman(45);
