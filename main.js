const mapFunction = (arr, func) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let pos = arr[i];
    newArr.push(func(pos, i, arr));
  }
  return newArr;
};

const arr1 = [1, 9, 9, 4];

const doubledArr = mapFunction(arr1, (x) => x * 2);
const readableArr = doubledArr.toString();
//expected output: 2,18,18,4
console.log("mapFunction(arr1)", readableArr);

const reduceFunction = (arr, func, initValue = 0) => {
  let accumulator = arr[0 + initValue];
  let currentValue;
  for (let i = initValue + 1; i < arr.length; i++) {
    currentValue = arr[i];
    accumulator = func(accumulator, currentValue);
  }
  return accumulator;
};

const arr2 = [1, 9, 9, 4];
const sumOfValues = reduceFunction(
  arr2,
  (accumulator, currentValue) => accumulator + currentValue
);
//expected output: 23
console.log("reduceFunction(arr2)", sumOfValues);

const filterFunction = (arr, num) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

const arr3 = [65, 16, 4, 9, 21, 1, 68];
//expected output (3) [65, 21, 68]
console.log(filterFunction(arr3, 16));
