function spinalCase(str) {
  let newStr = str.split(/\W|[_]/).map(item => 
      item.match(/[A-Z]*[a-z]+/g).join("-").toLowerCase())
      .join("-");
  return newStr;
}

spinalCase("thisIsSpinalTap");