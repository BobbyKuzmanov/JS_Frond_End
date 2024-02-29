function solve(text, word) {
  

  while (text.includes(word)) {
    text = text.replace(word,"*".repeat(word.length));
  }  

  console.log(text);
}

solve('A small sentence with some words', 'small');

// Write a function that receives a text as a first parameter and a single word as a second. 
// Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
// The repeat() function should take the length of the word and return that amount of stars '*'.