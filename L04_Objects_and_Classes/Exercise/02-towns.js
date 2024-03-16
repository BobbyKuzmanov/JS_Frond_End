function townsLocation(input) {
    let data = [];

    for (let item of input) {
        let [town, latitude, longitude] = item.split(" | ");

        const info = {
            town: town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2)
        }

        data.push(info);
    }

    for (let item of data) {
        console.log(item);
    }

}

townsLocation(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])