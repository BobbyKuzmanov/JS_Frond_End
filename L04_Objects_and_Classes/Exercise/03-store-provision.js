function storeProvision(...arrProducts) {
    const objProducts = {}

    for (const products of arrProducts) {
        for (let i = 0; i < products.length; i += 2) {
            const product = products[i]
            const countProduct = parseInt(products[i + 1])
            if (!(product in objProducts)) {
                objProducts[product] = 0
            }

            objProducts[product] += countProduct
        }
    }
    Object.entries(objProducts).forEach(([product, count]) => console.log(product + ' -> ' + count))
}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])


// You will receive two arrays. The first array represents the current
//  stock of the local store. The second array will contain products 
//  that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd 
// index will hold the quantity of that product. The second array could 
// contain products that are already in the local store. If that happens 
// increase the quantity for the given product. You should store them into
//  an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.
