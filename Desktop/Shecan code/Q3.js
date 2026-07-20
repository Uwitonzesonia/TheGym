function countValue(arr, value) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }

  return count;
}

let inputArray = [1,2,2,3,2];
let searchValue = 2;

console.log(countValue(inputArray, searchValue));
