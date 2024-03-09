function cityInfo(city) {
    
  let enries = Object.entries(city);

  for (let [key, value] of enries) {
    console.log(`${key} -> ${value}`);
  }
}

cityInfo({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});


// A function that receives a single parameter – an object,
//  containing five properties:{ name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"
// See the examples below.
