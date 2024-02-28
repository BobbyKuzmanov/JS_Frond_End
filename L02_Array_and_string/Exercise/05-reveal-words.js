function solve(words, text) {

  let wordsArr = words.split(', ');
  let textArr = text.split(' ');

  for (let i = 0; i < wordsArr.length; i++) {

    for (let j = 0; j < textArr.length; j++) {
      let isMatch = textArr[j].includes('*') &&
        textArr[j].length === wordsArr[i].length

      if (isMatch) {
        textArr[j] = wordsArr[i];
      }
    }
  }


  console.log(textArr.join(' '));
}


solve('great',
  'softuni is ***** place for learning new programming languages');



// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.