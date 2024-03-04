function solve (product, quantity) {
  let totalPrice = 0;

  if (product == "coffee") {
    totalPrice = 1.50;
  } else if (product == "coke") {
    totalPrice = 1.40;
  } else if (product == "water") {
    totalPrice = 1.00;
  } else if (product == "snacks") {
    totalPrice = 2.00;
  }


  console.log(`${(totalPrice * quantity).toFixed(2)}`);
}

solve("coffee", 2);
solve('water',5 );

// function that calculates the total price of an order and prints it on the console. 
// The function should receive one of the following products: 
// coffee, coke, water, snacks; and a quantity of the product. 
// The prices for a single piece of each product are: 
//     • coffee - 1.50
//     • water - 1.00
//     • coke - 1.40
//     • snacks - 2.00