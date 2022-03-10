function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [...arr];
  for (let item of newArr) {
    let dTotal = earthRadius + item["avgAlt"];
    // console.log(dTotal);

    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(dTotal,3) / GM));

    item["orbitalPeriod"] = orbitalPeriod;
    delete item["avgAlt"];
  }
  // console.log(newArr);
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);