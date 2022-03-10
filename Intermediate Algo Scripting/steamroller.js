function steamrollArray(arr) {
  // console.log(arr);
  // console.log(arr[0]);
  let newArr = [...arr];
  // console.log(newArr);

  // RECURSION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const flatter = myArray => myArray.reduce((accum, item) => {
    console.log("The item is",item);
    console.log("The accumulator is",accum);
    if ((item[0] === undefined && item.length !== 0) || typeof item === "string") {
      // !Symbol.iterator in Object(item)
      // item[0] === undefined
      accum.push(item);
      console.log("The accumulator after the number is",accum);
    } else {
      flatter(item).forEach(thing => accum.push(thing));
      console.log("The accumulatorafter the array is",accum);
    }
    console.log();
    return accum;
  },[]);

  return flatter(newArr);
}
// console.log([].concat(1));
// console.log({}[0]);
// console.log([][0]);
// console.log();

// console.log(typeof {});
// console.log(typeof []);
// console.log();

// console.log({}.length);
// console.log([].length);
// console.log();


// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]]);
// steamrollArray([1, [], [3, [[4]]]]);
// steamrollArray([1, {}, [3, [[4]]]]);

console.clear();