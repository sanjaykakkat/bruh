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

// PART - 2

function countTo(number) {
    for (i=1; i<= number; i++){
      console.log (i);
    }
}

countTo(5);

// PART - 3

const clothes = ["shirt", "jeans", "shoes", "jacket"];

function showClothes(items) {
    for (i=0; i< clothes.length; i++) {
      console.log (clothes[i]);
    }
}

showClothes(clothes);
