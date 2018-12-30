function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => String.fromCharCode((char.charCodeAt(0) % 26) + 65));
}

rot13("SERR PBQR PNZC");
