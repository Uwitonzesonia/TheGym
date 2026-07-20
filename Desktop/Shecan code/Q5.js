function flattenArray(arr) {
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      return result.concat(item);
    } else {
      result.push(item);
      return result;
    }
  }, []);
}

let inputArray = [1, [2, 3], 4];
console.log(flattenArray(inputArray));
