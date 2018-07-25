const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  return this.films.map(function(film) {
    return film.title;
  })
};

Cinema.prototype.findByTitle = function () {
  return this.films.find(function(film){
    return film.title;
  })
};

Cinema.prototype.filterByGenre = function (genre) {
  return this.films.filter(function(film){
    return film.genre === genre;
  })
  // let newFilms = this.films.filter(function(film){
  //   if(genre === film.genre){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // });
  //
  // return newFilms;
};

Cinema.prototype.checkFilmYears = function (year) {
  return this.films.some(function(film){
    return film.year === year;
  })
};

Cinema.prototype.checkRunningTime = function (length) {
  return this.films.every(function(film){
    return film.length > length;
  })
};

Cinema.prototype.totalRunTime = function () {
  var initialValue = 0;
  return this.films.reduce(function(accumulator, film){
    return film.length += accumulator;
  }, initialValue)
};

// Enumeration.prototype.reduce = function(array, accaFunction){
//   var acca = 0;
//   this.forEach(array, function(item){
//     acca = accaFunction(acca, item);
//   })
//   return acca;
// }















module.exports = Cinema;
