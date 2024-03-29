function movies(list) {
    let output = {}

    for (let item of list) {
        let commandOrName = item.split(" ")[0]

        if (commandOrName === "addMovie") {
            let movieName = item.split("addMovie ")[1]
            output[movieName] = {}
            output[movieName].name = movieName
        }

        else if (item.includes("directedBy")) {
            let movieName = item.split(" directedBy ")[0]
            let director = item.split(" directedBy ")[1]

            if (movieName in output) {
                output[movieName].director = director
            }
        }

        else if (item.includes("onDate")) {
            let movieName = item.split(" onDate ")[0]
            let date = item.split(" onDate ")[1]

            if (movieName in output) {
                output[movieName].date = date
            }
        }
    }

    for (let [movieName, data] of Object.entries(output)) {
        if (Object.keys(output[movieName]).length === 3) {
            console.log(JSON.stringify(data))
        }
    }
}

movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])