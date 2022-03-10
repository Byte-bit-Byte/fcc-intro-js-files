function dropElements(arr, func) {

  let newArr = arr.slice();
  // Returns an empty array if none of the elements satisfy the condition
  if (newArr.some(func) === false) {
    return [];
  }
  // newArr = newArr.forEach(item => {
  //   if (func(item)) {
  //     break;
  //   }
  // });
  let result = [];
  let count = 0;
  for (const item of newArr) {
    if (func(item)) {
      count++;
    } 
    // console.log(item);
    // console.log(func(item));
    // console.log(count);
    // console.log();

    if (count > 0) {
      result.push(newArr.slice(newArr.indexOf(item), newArr.indexOf(item) + 1)[0]);
    }
  }
  console.log(result);
  return result;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3], function(n) {return n > 0;});
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});