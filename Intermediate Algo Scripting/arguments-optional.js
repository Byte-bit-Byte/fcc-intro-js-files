function addTogether() {
  let args = [...arguments];
  let test = args.filter(item => typeof item === "number");

  if (args.length !== test.length) {
    return undefined;
  }

  if (arguments.length < 2) {
    const sumNext = num => {
      if (typeof num === "number") {
        return num + args[0]        
      }
      return undefined};
    return sumNext;
  }

  // console.log([...arguments].reduce((sum,item) => sum + item, 0));
  return args.reduce((sum,item) => sum + item, 0);
}
// console.log(Number([3]));
