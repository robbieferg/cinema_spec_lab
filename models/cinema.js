const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function() {
  result = [];
  this.films.forEach(function(film) {
    result.push(film.title);
  })

  return result;
}

Cinema.prototype.findFilmByTitle = function(title) {
  const foundFilm = this.films.filter((film) => film.title === title)[0]
  return foundFilm;
}

Cinema.prototype.filterByProperty = function(property, value) {
  let filteredFilms = []
  
  if (property === "genre") {
    filteredFilms = this.films.filter((film) => film.genre === value);
  }
  else {
    filteredFilms = this.films.filter((film) => film.year === value);
  }
  return filteredFilms;
}

Cinema

Cinema.prototype.ifYearExists = function(year) {
  const yearExists = this.films.some((film) => film.year === year);
  return yearExists;
}

Cinema.prototype.ifAllOverLength = function(length) {
  const allOverLength = this.films.every((film) => film.length > length);
  return allOverLength;
}

Cinema.prototype.getTotalTime = function() {
  let totalTime = this.films.reduce((runningTotal, film) => runningTotal + film.length, 0);
  return totalTime;
}


module.exports = Cinema;
