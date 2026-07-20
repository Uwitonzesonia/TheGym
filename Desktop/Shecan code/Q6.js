function isAnagram(str1, str2) {
  let first = str1.toLowerCase().split('').sort().join('');
  let second = str2.toLowerCase().split('').sort().join('');

  return first === second;
}

console.log(isAnagram("listen", "silent"));