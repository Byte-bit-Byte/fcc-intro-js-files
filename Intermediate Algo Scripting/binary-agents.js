// Easiest so far, didn't even need recursion
function binaryAgent(str) {
  const binArr = str.split(" ");
  // console.log(binArr);

  const decArr = binArr.map(item => parseInt(item, 2));
  // console.log(decArr);

  const charArr = decArr.map(item => String.fromCharCode(item));
  // console.log(charArr);

  // console.log(charArr.join(""));

  return charArr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");