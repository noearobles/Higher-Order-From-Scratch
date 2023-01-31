const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

let foods = [
  { name: "steak", calories: 800, carbs: 10, fat: 30 },
  { name: "fruit", calories: 200, carbs: 20, fat: 0 },
  { name: "salad", calories: 100, carbs: 0, fat: 5 },
  { name: "chips", calories: 300, carbs: 10, fat: 10 },
  { name: "ice cream", calories: 700, carbs: 20, fat: 20 },
];

const total = foods.reduce(
  (acc, curVal) => `${acc} ${curVal.name} : ${curVal.calories},`,
  "Your food items and their calories:"
);

console.log(total);
// steak : 800, fruit : 200, salad : 100, chips : 300, ice cream : 700,


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
