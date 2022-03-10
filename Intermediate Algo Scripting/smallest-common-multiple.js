// Research
// Finding GCD https://en.wikipedia.org/wiki/Greatest_common_divisor
// Using GCD to find LCM https://en.wikipedia.org/wiki/Least_common_multiple

// Only works for the two numbers at the extreme

// function smallestCommons(arr) {

//   // RECURSION!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   const gcd = (num1, num2) => {
//     let minNum = Math.min(num1,num2);
//     let maxNum = Math.max(num1,num2);
//     if ( minNum === 0) {
//       return maxNum;
//     }
//     return gcd(minNum, maxNum % minNum);
//   }

//   // console.log(gcd(48, 18));
    
    // const lcm = (num1, num2) => (num1 * num2)/(gcd(num1,num2));

//   return (arr[0] * arr[1])/(gcd(arr[0],arr[1]));
// }

// Critical theorem to find the lcd
// If none of a_1,a_2,... ,a_r is zero, then
// lcm(a_1,a_2,... ,a_r) = lcm(lcm(a_1,a_2,... ,a_(r-1)),a_r)

function smallestCommons(arr) {
  // RECURSION!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const gcd = (num1, num2) => {
    let minNumb = Math.min(num1,num2);
    let maxNumb = Math.max(num1,num2);
    if ( minNumb === 0) {
      return maxNumb;
    }
    return gcd(minNumb, maxNumb % minNumb);
  }

  // No Recursion
  const lcm = (num1, num2) => (num1 * num2)/(gcd(num1,num2));

  // console.log(lcm(4, 4));
  // RECURSION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const lcmArr = (num1, num2) => {
    let minNumb = Math.min(num1,num2);
    let maxNumb = Math.max(num1,num2);
    if (num1 === num2) {
      return num1;
    }
    else {
      // console.log("The LCM between ",lcm(minNumb, maxNumb - 1) , " and ", maxNumb);
      return lcm(lcmArr(minNumb, maxNumb - 1) , maxNumb);
    }
  }
  return lcmArr(arr[0], arr[1]);
}


// smallestCommons([1,5]);

console.log(smallestCommons([23, 18]));