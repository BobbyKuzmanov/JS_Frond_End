function solve(input) {

  let regex = /#[A-Za-z]+/gm;

  let matches = input.match(regex);

  for (let word of matches) {
    word = word.replace('#', '');
    console.log(word);
  }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')

// The input will be a single string.
// Find all special words starting with #. If the found special word does not
// consist only of letters, then it is invalid and should not be printed.
// Finally, print out all the special words you found without the label (#)
// on a new line.