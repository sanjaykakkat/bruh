function checkAge(age) {
  if (age < 18) {
    return "Minor";
  } else {
    return "Adult";
  }
}

console.log(checkAge(15));
console.log(checkAge(18));
console.log(checkAge(25));
