function characterRange( char1, char2) {
  
  let start = char1.charCodeAt(0);
  let end = char2.charCodeAt(0);

  result = '';
  for (let i = start + 1; i < end; i++) {
    
    result += String.fromCharCode(i) + ' ';
    
  }
  console.log(result);
}

characterRange('a', 'd');
characterRange('#',':')


// Write a function that receives two characters and prints on a single line 
// all the characters in between them according to the ASCII code. 
// Keep in mind that the second character code might be before the first one inside 
// the ASCII table. 