function solve(text, word) {
  let occurrences = 0;

  let textArr = text.split(' ');

  for(const arrWord of textArr){
    if(arrWord === word){
      occurrences++;
    }
  }
  console.log(occurrences);
}


solve('This is a word and it also is a sentence','is');

// Write a function that receives a text and a single word that you need to search.
// Print the number of all occurrences of this word in the text.
// Split the sentence into words and create a counter that stores how many times the searched word occurs.