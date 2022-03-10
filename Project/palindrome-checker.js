function palindrome(str) {
  // const tempString = str.trimEnd().trimStart();

  // Create an iterable array from string
  const arrayString = str.split('');

  // Ensures string only contains letters
  const cleanString = arrayString.filter(char => (/[a-zA-Z0-9]/).test(char));
  //  const cleanString = arrayString.filter(char => (/\w/).test(char));


  // Calculates length of word
  const len = cleanString.length;

  // Calculates mid point of word
  const n =  Math.trunc((cleanString.length - 1) / 2);

  for (let i = 0; i < n + 1; i++) {
    // Loops through string and returns false once a mismatch is found
    if (cleanString[i].toLowerCase() !== cleanString[len - i - 1].toLowerCase()){
      // console.log(cleanString[i], "is not equal to", cleanString[len - i - 1]);
      return false;
    }
  }
  // Returns true if no mismatch is found after loop
  return true;
}

palindrome("almostomla");