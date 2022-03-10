function uniteUnique(arr) {
  let bigArr = [...arguments].flat(1);

  let bigSet = new Set(bigArr);

  bigArr = [...bigSet];

  return bigArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);