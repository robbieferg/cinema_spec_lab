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

Cinema.prototype.filterByGenre = function(genre) {
  const filteredFilms = this.films.filter((film) => film.genre === genre)
  return filteredFilms;
}

Cinema.prototype.ifYearExists = function(year) {
  const yearExists = this.films.some((film) => film.year === year);
  return yearExists;
}

module.exports = Cinema;
