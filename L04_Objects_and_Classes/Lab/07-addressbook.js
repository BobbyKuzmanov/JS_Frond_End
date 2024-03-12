function solve(addressBook) {
    let output = {}

    for (let data of addressBook) {
        let [name, address] = data.split(":")
        output[name] = address
    }

    for (let [name, address] of Object.entries(output).sort()) {
        console.log(`${name} -> ${address}`)
    }
}

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])
