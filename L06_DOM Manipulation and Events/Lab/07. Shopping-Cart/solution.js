function solve() {
   const addButtons = Array.from(document.querySelectorAll(".add-product"))
   const checkOutBtn = document.querySelector(".checkout")
   const textArea = document.querySelector("textarea")

   let cart = []
   let totalPrice = 0

   function addToCart(itemName, itemPrice) {
      textArea.textContent += `Added ${itemName} for ${itemPrice.toFixed(2)} to the cart.\n`
      cart.push({name: itemName})
      totalPrice += itemPrice
   }

   function checkOut() {
      let uniqueProducts = [...new Set(cart.map(product => product.name))]

      textArea.value += `You bought ${uniqueProducts.join(", ")} for ${totalPrice.toFixed(2)}.`

      checkOutBtn.disabled = true

      addButtons.forEach(button => {
         button.disabled = true
      })
   }


   addButtons.forEach(button => {
      button.addEventListener("click", event => {
         let productDiv = event.target.parentElement.parentElement
         let productName = productDiv.querySelector(".product-title").textContent
         let productPrice = parseFloat(productDiv.querySelector(".product-line-price").textContent)

         addToCart(productName, productPrice)
      })
   })

   checkOutBtn.addEventListener("click", checkOut)
}


// You will be given some products that you should be able to add to your cart.
//     Each product will have a name, picture, and price.
// When the "Add" button is clicked, append the current product to the textarea in the
// following format: "Added {name} for {money} to the cart.\n". The price must be fixed
// to the second digit.
// When the button "Checkout" is clicked, calculate the total money that you need to pay
// for the products that are currently in your cart. Append the result to the textarea in
// the following format:
// "You bought {list} for {totalPrice}."
// The list should contain only the unique products, separated by ", ". The total price should
// be rounded to the second decimal point.
// Also, after clicking over "Checkout" and every from above is done you should disable all buttons.
// (You can't add products or checkout again if once the checkout button is clicked).