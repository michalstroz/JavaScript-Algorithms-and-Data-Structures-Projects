function rot13(str) {
  let i = 0;
  const len = str.length;
  let res = "";

  while (i < len) {

    if (/\W/.test(str[i])) {
      res += str[i]
      i++
      continue;
    }

    const charCode = str.charCodeAt(i);

    if (charCode + 13 > 90) {
      res += String.fromCharCode(65 + (12 - (90 - charCode)));
    } else {
      res += String.fromCharCode(charCode + 13);
    }

    i++;
  }

  return res;
}


rot13("SERR PBQR PNZC");
