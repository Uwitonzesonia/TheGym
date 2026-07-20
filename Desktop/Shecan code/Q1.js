
let sentence = "hello world from shecancode";
let words = sentence.trim().split(" ");

words = words.map(w => w.charAt(0).toUpperCase() + w.slice(1),0);

console.log(words.join(" "));