function movies(commands) {
    let movies = [];

    for (let i = 0; i < commands.length; i++) {
        let singleCommand = commands[i].split(" ");
        if (singleCommand.includes(`addMovie`)) {
            addMovie(singleCommand);
        } else if (singleCommand.includes(`directedBy`)) {
            directedBy(singleCommand);
        } else if (singleCommand.includes(`onDate`)) {
            onDate(singleCommand);
        }

        function addMovie(command) {
            command.shift();
            command = command.join(" ");
            movies.push(command, "", "");
        }

        function directedBy(command) {
            let indexMovie = command.indexOf(`directedBy`);
            let movieName = command.slice(0, indexMovie);
            movieName = movieName.join(" ");
            if (movies.includes(movieName)) {
                let director = command.slice(indexMovie + 1);
                director = director.join(" ");
                let index = movies.indexOf(movieName);
                if (movies[index + 1] == "") {
                    movies.splice(index + 1, 1, director);
                } else {
                    movies.splice(index + 2, 1, director);
                }
            }
        }

        function onDate(command) {
            let indexMovie = command.indexOf(`onDate`);
            let movieName = command.slice(0, indexMovie);
            movieName = movieName.join(" ");
            if (movies.includes(movieName)) {
                let date = command.slice(indexMovie + 1);
                date = date.join("");
                let index = movies.indexOf(movieName);
                if (movies[index + 1] == "") {
                    movies.splice(index + 1, 1, date);
                } else {
                    movies.splice(index + 2, 1, date);
                }
            }
        }
    }

    let resultOne = {};
    let resultTwo = {};
    for (let j = 0; j < movies.length; j += 3) {
        let hasNumbers = /\d/.test(movies[j + 1]);
        if (movies[j + 1] != "" && movies[j + 2] != "" && hasNumbers == true) {  //movies[j + 1].includes(".")
            resultOne.name = movies[j];
            resultOne.date = movies[j + 1];
            resultOne.director = movies[j + 2];
            console.log(JSON.stringify(resultOne));
        } else if (movies[j + 1] != "" && movies[j + 2] != "" && hasNumbers == false) {   //movies[j + 2].includes(".")
            resultTwo.name = movies[j];
            resultTwo.director = movies[j + 1];
            resultTwo.date = movies[j + 2];
            console.log(JSON.stringify(resultTwo));
        }
    }
}
movies(
    
    [
         'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
        ]
        
    );
