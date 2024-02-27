function solve(text, word) {
  
  let censored = text.replace(word, repeat(word));

  while (censored.includes(word)) {
    censored = censored.replace(word, repeat(word));

  }  

  
}



// Write a function that receives a text as a first parameter and a single word as a second. 
// Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
// The repeat() function should take the length of the word and return that amount of stars '*'.