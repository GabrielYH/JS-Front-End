function StoreInfoAboutMovies(input) {
  class Movie {
    constructor(name, director, date) {
      this.name = name;
      this.director = director;
      this.date = date;
    }
  }
  const moviesList = new Array();

  for (const cmd of input) {
    const cmdData = cmd.split(" ");

    if (cmd.includes("addMovie")) {
      const movieName = cmd.replace("addMovie ", "");

      if (!moviesList.some((m) => m.name === movieName)) {
        moviesList.push(new Movie(movieName, "", ""));
      }
    } else if (cmd.includes("directedBy")) {
      const indexOfDirectedBy = cmdData.indexOf("directedBy");
      const movieName = cmdData.slice(0, indexOfDirectedBy).join(" ");
      const directorName = cmdData.slice(indexOfDirectedBy + 1).join(" ");

      if (moviesList.some((m) => m.name === movieName)) {
        const currMovie = moviesList.find((m) => m.name === movieName);
        currMovie.director = directorName;
      }
    } else if (cmd.includes("onDate")) {
      const indexOfDirectedBy = cmdData.indexOf("onDate");
      const movieName = cmdData.slice(0, indexOfDirectedBy).join(" ");
      const date = cmdData.slice(indexOfDirectedBy + 1).join(" ");

      if (moviesList.some((m) => m.name === movieName)) {
        const currMovie = moviesList.find((m) => m.name === movieName);
        currMovie.date = date;
      }
    }
  }
  for (const movie of moviesList) {
    if (movie.director !== "" && movie.date !== "") {
      console.log(JSON.stringify(movie));
    }
  }
}
StoreInfoAboutMovies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
