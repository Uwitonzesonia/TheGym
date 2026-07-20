function LongestWord(sentence) {
    let words = sentence.trim().split(/\s+/);
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i].replace(/[^A-Za-z]/g, ""); 
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

let sentence = "I Love Programming Challenges";
console.log(LongestWord(sentence)); 