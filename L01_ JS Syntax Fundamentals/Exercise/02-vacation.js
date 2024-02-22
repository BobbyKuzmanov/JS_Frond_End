function solve(count, type, day) {
  let singePrice = 0;

  if (day === "Friday") {
    switch (type) {
      case "Students":
        singePrice = 8.45;
        break;
      case "Business":
        singePrice = 10.9;
        break;
      case "Regular":
        singePrice = 15;
        break;
    }
  } else if (day === "Saturday") {
    switch (type) {
      case "Students":
        singePrice = 9.8;
        break;
      case "Business":
        singePrice = 15.6;
        break;
      case "Regular":
        singePrice = 20;
        break;
    }
  } else if (day === "Sunday") {
    switch (type) {
      case "Students":
        singePrice = 10.46;
        break;
      case "Business":
        singePrice = 16;
        break;
      case "Regular":
        singePrice = 22.5;
        break;
    }
  }

  let totalPrice = count * singePrice;

  if (type === "Students" && count >= 30) {
    totalPrice *= 0.85;
  } else if (type === "Business" && count >= 100) {
    totalPrice -= singePrice * 10;
  } else if (type === "Regular" && count >= 10 && count <= 20) {
    totalPrice *= 0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");

solve(40, "Regular", "Saturday");

// You are given a group of people, the type of the group, and the day of the week they are going to stay.
// Based on that information calculate how much they have to pay and print that price on the console.
// Use the table below. In each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.
// The price should be formatted to the second decimal point.

// Day / Type of group / Price
// Friday / Students / 8.45
// Friday / Business / 10.90
// Friday / Regular / 15
// Saturday / Students / 9.80
// Saturday / Business / 15.60
// Saturday / Regular / 20
// Sunday / Students / 10.46
// Sunday / Business / 16
// Sunday / Regular / 22.50

// • Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// • Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// • Regular – if the group is bigger than or equal to 10 and less than or equal to
// 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.
