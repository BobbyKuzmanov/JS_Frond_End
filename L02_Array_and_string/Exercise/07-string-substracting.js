function solve(word, text) {

  let wordsArr = text.toLowerCase().split(' ');
  let output = `${word} not found!`;

  for (let i = 0; i < wordsArr.length; i++) {
    currentWord = wordsArr[i];
    
    if (currentWord === word) {
      output = currentWord;
    }
  }

  console.log(output);
  
}

solve('javascript',
'JavaScript is the best programming language')


// The input will be a single string.
// Find all special words starting with #. If the found special word does not
// consist only of letters, then it is invalid and should not be printed. 
// Finally, print out all the special words you found without the label (#) 
// on a new line.