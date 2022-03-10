const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName = undefined;
  let lastName = undefined;
  let arr = firstAndLast.trim().split(" ");
    if (arr.length === 2) {
      firstName = arr[0];
      lastName = arr[1];
    }

  this.getFirstName = () => {
    return firstName;
  }

  this.getLastName = () => {
    return lastName;
  }

  this.getFullName = () => {
    return `${firstName} ${lastName}`;
  }

  this.setFirstName = (first) => {
     firstName = first;
  }

  this.setLastName = (last) => {
    lastName = last;
  }

  this.setFullName = (firstAndLast) => {
    let arr = firstAndLast.trim().split(" ");
    if (arr.length === 2) {
      this.setFirstName(arr[0]);
      this.setLastName(arr[1]);
    }
  }
  return firstAndLast;
};

const bob = new Person('Bob Ross');
// console.log(Object.keys(bob).length);
// console.log(bob instanceof Person);
// console.log(bob.firstName);
// console.log(bob.lastName);
// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.getFullName());
// bob.setFirstName("Haskell");
// console.log(bob.getFullName());
// bob.setFullName("Haskell Curry");
// console.log(bob.getFullName());
// console.log(bob.getLastName());
// console.log(Object.keys(bob));
// console.log(Object.keys(bob).length);
// console.clear();
