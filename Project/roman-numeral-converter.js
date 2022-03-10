function convertToRoman(num) {
  // Checks to make sure argument is a number
  if (typeof num !== "number") {
    console.log("This is not a valid number");
    return num;
  }

  // Truncates any decimals from number if they exist
  const intNum = Math.floor(num);
  // console.log(intNum);

  // Checks if number is too large
  if (intNum > 1000000) {
    console.log("Number too big, cannot compute!");
    return num;
  }

  // Finds the number of digits in the number
  const numSize = Math.floor(Math.log10(intNum)) + 1;
  console.log(numSize)

  // Create an array to hold the different possible values for the roman numerals
    const romanArr = [
    ["I","V","X"],
    ["X","L","C"],
    ["C","D","M"],
    // I could not get Vbar and so on so I am using * as a proxy
    // Based on this website: https://www.mathsisfun.com/roman-numerals.html
    ["M","V*","X*"],
    ["X*","L*","C*"],
    ["C*","D*","M*"]
  ];

  // Initialize the string that will be returned as result
  let result = "";

  // Collect each number from the digit and convert them to Roman Numerals
  for (let i = 0; i < numSize; i++) {
    let digit = (intNum / (Math.pow(10,i)) % 10);
    digit = Math.floor(digit);
    if (digit < 4) {
      result = romanArr[i][0].repeat(digit) + result;
    }
    else if (digit === 4) {
      result = romanArr[i][0] + romanArr[i][1] + result;
    }
    else if (digit < 9) {
      result = romanArr[i][1] + romanArr[i][0].repeat(digit-5)+ result;
    }
    else {
      result =  romanArr[i][0]+ romanArr[i][2] + result;
    }
  }
 return result;
}

convertToRoman(5000000);