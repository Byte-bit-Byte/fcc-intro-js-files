function truthCheck(collection, pre) {
    let itemCount = 0;
    let truthyCount = 0;
    
  for (const objects of collection) {
    itemCount++;
    if (Boolean(objects[pre])) {
      truthyCount++;
    }
    console.log(itemCount, truthyCount);
  }
  
  
  return itemCount === truthyCount;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");