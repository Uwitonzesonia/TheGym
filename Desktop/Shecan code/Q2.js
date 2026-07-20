function MissingNumber(arr) {
  let sum = arr.reduce((acc, value) => acc + value, 0);
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - sum;
}

const numbers = [1, 2, 4, 5];
console.log(MissingNumber(numbers));