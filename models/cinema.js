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

module.exports = Cinema;
