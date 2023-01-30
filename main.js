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

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

const groupedFoods = groupBy(foods, "name");
console.log(groupedFoods);

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
