// Related Research
// https://en.wikipedia.org/wiki/Prime_number#Analytic_properties
// https://en.wikipedia.org/wiki/Generation_of_primes#Prime_sieves

// What I actually implemented
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

// algorithm Sieve of Eratosthenes is
//     input: an integer n > 1.
//     output: all prime numbers from 2 through n.

//     let A be an array of Boolean values, indexed by integers 2 to n,
//     initially all set to true.
    
//     for i = 2, 3, 4, ..., not exceeding √n do
//         if A[i] is true
//             for j = i^2, i^2+i, i^2+2i, i^2+3i, ..., not exceeding n do
//                 A[j] := false

//     return all i such that A[i] is true.



function sumPrimes(num) {
  // Define a function for squaring since I use it a lot

  const sqr2 = numb => Math.pow(numb,2);

  // Error checking to ensure only positive primes >= 2
  if (num < 2) {
    console.log("Provide number greater than 1");
    return 0;
  }

  // let A be an array of Boolean values, indexed by integers 2 to n
  let primeArr = [];
  for (let i = 2; i < num + 1; i++) {
    primeArr.push(i);
  }

  // Modified stop point since my array is indexed from 0 and not 2
  // for i = 2, 3, 4, ..., not exceeding √n do
  let stop = Math.sqrt(num) - 2;
  for (let i = 0; i <= stop; i++) {
    // if A[i] is true
    if (primeArr[i] !== 0) {
      // Correct the index since I'm indexing from 0 and not 2
      let isqrd = sqr2(i+2) - 2;
      // for j = i^2, i^2+i, i^2+2i, i^2+3i, ..., not exceeding n do
      //    A[j] := false
      for (let j = isqrd; j < num; j = j + (i+2)) {
        primeArr[j] = 0;
      }
    }
  }
  return primeArr.reduce((sum, prime) => sum + prime, 0);
}

sumPrimes(977);