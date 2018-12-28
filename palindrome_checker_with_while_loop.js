function palindrome(str) {
  let front = 0;
  let back = str.length - 1;

  while (back > front) {
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }

    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }

    if (str[front].toLowerCase() !== str[back].toLowerCase()) {
      return false;
    }

    front++;
    back--;
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
