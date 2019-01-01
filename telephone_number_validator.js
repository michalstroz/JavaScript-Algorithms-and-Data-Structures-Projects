function telephoneCheck(str) {
  const reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?(\d{3})[\-\s]?(\d{4})$/;
  return reg.test(str);
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("1(555)555-5555");
telephoneCheck("2 757 622-7382");
telephoneCheck("1 555)555-5555");
telephoneCheck("555-5555");
