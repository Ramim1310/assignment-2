//calculate sum
function calculateSum(a, b) {
  return a + b;
}


//check even
function isEven(number) {
  return number % 2 === 0;
}

//finding max
function findMax(array) {
  return Math.max(...array);
}

//reversing string
function reverseString(s) {
  return s.split("").reverse().join("");
}

//finding odd numbers
function filterOddNumbers(array) {
  return array.filter((num) => num % 2 !== 0);
}

//sum 0f array
function sumArray(array) {
  let sum = 0; 
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
return sum;
}


//sorting array
function sortArray(array) {
  return array.sort((a, b) => a - b);
}

//capitalize

function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}








