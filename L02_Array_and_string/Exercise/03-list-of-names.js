function solve(list) {


  list.sort((a, b) => {
    return a.localeCompare(b);
  });

  let index = 1;

  for (const name of list){
    console.log(`${index++}.${name}`);
  }
}

solve(["John", "Bob", "Christina", "Ema"]);

// You will receive an array of names. Sort them alphabetically in
//  ascending order and print a numbered list of all the names,
//  each on a new line/.
