function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log("a = " + a);
  console.log("b = " + b);
}

swapNumbers(5, 10);
