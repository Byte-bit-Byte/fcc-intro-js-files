function rot13(str) {
  // Breaks the string into an iterable object
  let strArr = str.split("");

  // Set a shift value
  const shift = 13;

  // Initialize the variable to hold the result
  let result = "";

  // Iterates through each character in the array
  // Shifts it if it is an upper case letter
  // Ignores it if it is not a letter
  for (const char of strArr) {
    let ascii = char.toUpperCase().charCodeAt(0);

    if (ascii > 64 && ascii < 91) {
      let newAscii = (ascii + shift) < 91 ? 
                      ascii + shift : ascii + shift - 26;
      result += String.fromCharCode(newAscii);
    } else {
      result += String.fromCharCode(ascii);
    }
  }

  return result;
}

console.log(rot13("gur DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));