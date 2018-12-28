function palindrome(str) {
  const matchedStr = str.match(/[^\W_]/g);
  const reverseStr = matchedStr.slice().reverse();

  return joinToStr(matchedStr) === joinToStr(reverseStr);

  function joinToStr(arr) {
    return arr.join("").toLowerCase();
  }

}



palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
