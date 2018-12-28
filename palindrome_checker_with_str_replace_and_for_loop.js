function palindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();

  for (let i = 0, len = str.length - 1; i < len/2; i++) {
    if (str[i] != str[len - i]) {
      return false;
    }
  }

  return true;
}



palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
