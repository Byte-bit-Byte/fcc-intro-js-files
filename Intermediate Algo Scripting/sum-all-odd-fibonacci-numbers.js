// Naive
// function sumFibs(num) {
//   if (num === 1) {
//     return 2;
//   }

//   // Initialize values for the previous numbers in the sequence
//   // The current number in the sequence
//   // The running total of the odd numbers in the sequence
//   let prevNum1 = 1;
//   let prevNum2 = 0;
//   let curNum = 0;
//   let sum = 1;

//   while (true) {
//     // Find the next number in the series
//     curNum = prevNum1 + prevNum2;

//     if (curNum > num) {
//       return sum;
//     }

//     // Add current number to the sum
//     if (curNum % 2 !== 0) {
//       sum += curNum;
//     }    

//     // Store the value of the current number
//     let tmp1 = curNum;
//     let tmp2 = prevNum1;

//     // Update the previous number
//     prevNum1 = tmp1;
//     prevNum2 = tmp2;
//   }
// }

// Recursion
function sumFibs(num) {
  // Equations obtained from wikipedia
  // https://en.wikipedia.org/wiki/Fibonacci_number#Recognizing_Fibonacci_numbers

  // Define a variable to hold the squareroot of 5
  const sqrt5 = Math.sqrt(5);

  // Calculate the golden ratio approximation
  const goldR = (1 + sqrt5) / 2;
  // console.log(goldR);

  // Define a function to calculate the power of the golden ratio
  const goldRPow = n => Math.pow(goldR,n);
  // console.log(goldRPow(3));

  // Define a function to calculate logarithm to the base of the golden ratio
  const goldRLog = numb => Math.log(numb) / Math.log(goldR);
  // console.log(goldRLog(goldRPow(3)));

  // Define a function that calculate the number in the golden ration given its index.
  const findFn = n => Math.floor((goldRPow(n) / Math.sqrt(5)) + 0.5);
  // console.log(findFn(8));

  // Define a function to find the nearest index of a fibonacci number
  // Given a number
  const findN = numb => goldRLog(((numb * sqrt5) + Math.sqrt(5 * Math.pow(numb, 2) + 4)) / 2);
  // console.log(findN(8));
  
  // The actual recursion after all the setup
  const recurseOddFib = numb => {
    if (numb === 0) {
      return numb;
    }
    if (numb === 1) {
      return 2;
    }
    // Account for float error and calculate the nearest fibonaccii number smaller than numb
    let floatError = 0.9999999;
    let index = findN(numb) - Math.floor(findN(numb)) > floatError? Math.round(findN(numb)) : Math.floor(findN(numb));
    console.log("Nearest Index",index);
    console.log("Nearest Smaller Fib Number",findFn(index));
    console.log("Next Smallest Fib Number",findFn(index - 1));
    console.log();
    if (findFn(index) % 2 !== 0) {
      return findFn(index) + recurseOddFib(findFn(index - 1));
    }
    return recurseOddFib(findFn(index - 1));
  };

  // console.log(recurseOddFib(num));

  return recurseOddFib(num);
}

// sumFibs(4000000);
console.log(sumFibs(4000000));