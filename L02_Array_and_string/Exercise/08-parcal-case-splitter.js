function solve(text){
  // TODO
  let wordsRegex = /[A-Z][a-z]*/gm;
  let wordsArr = text.match(wordsRegex);
  let resultString = wordsArr.join(', ');
  
  console.log(resultString);
}

// Test:
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('NowYouCanDoIt')

// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.