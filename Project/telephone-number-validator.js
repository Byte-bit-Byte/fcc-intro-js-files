function telephoneCheck(str) {
  // Build a disgusting Regex to test cover all the test cases
  let testRegex = /^1*\s*\(\d\d\d\)\-*\s*\d\d\d\-*\s*\d\d\d\d$|^1*\s*\d\d\d\-*\s*\d\d\d\-*\s*\d\d\d\d$/;

  return testRegex.test(str);
}

console.log(telephoneCheck("1 555 555 5555"));