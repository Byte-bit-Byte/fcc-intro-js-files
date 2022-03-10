function convertHTML(str) {
  let swapObj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;"
  };
  let newStr = str.slice().match(/[&<>"']|[^&<>"']+/g);

  let result = [];
  newStr.forEach(item => {
    if (swapObj.hasOwnProperty(item)) {
      result.push(swapObj[item]);
    } else {
      result.push(item);
    }
  });
  return result.join("");
}

convertHTML("Dolce & Gabbana");
console.log(convertHTML("abc"));