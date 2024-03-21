function oddOccurrences(text) {
    let words = text.toLowerCase().split(' ');
    let result = {};
    for (let word of words) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }
    }

    let resultArr = [];
    for (let word in result) {
        if (result[word] % 2 !== 0) {
            resultArr.push(word);
        }
    }
    console.log(resultArr.join(' '));

}

oddOccurrences('Java C# Php Php Java PhP 3 C# 3 1 5 C#');

// A function that extracts the elements of a sentence,
//  if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.