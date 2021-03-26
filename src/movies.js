// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (moviesArr) => {
  let directorArr = moviesArr.map((eachMovie) => {
    return eachMovie.director;
  });
  return directorArr;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (moviesArr) => {
  let spielbergDrama = moviesArr.filter((elem) => {
    return elem.director === "Steven Spielberg" && elem.genre.includes("Drama");
  });
  return spielbergDrama.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// über alles loopen, sum of rate mit reduce, dann durch Anzahl movie.length
let ratesAverage = (moviesArr) => {
  if (moviesArr.length == 0) {
    return 0;
  }

  let sumRates = moviesArr.reduce((sum, elem) => {
    if ("rate" in elem) {
      return sum + elem.rate;
    }
    return sum;
  }, 0);
  let average = sumRates / moviesArr.length;
  return +average.toFixed(2);
};

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (moviesArr) => {
  if (moviesArr.length == 0) {
    return 0;
  }
  let allDrama = moviesArr.filter((elem) => {
    return elem.genre.includes("Drama");
  });

  return ratesAverage(allDrama);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//clone array JSON
//.sort

let orderByYear = (moviesArr) => {
  let clonedMovies = JSON.parse(JSON.stringify(moviesArr));
  clonedMovies.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem1.year < elem2.year) {
      return -1;
    } else {
      if (elem1.title > elem2.title) {
        return 1;
      } else if (elem1.title < elem2.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return clonedMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (moviesArr) => {
  let clonedMovies = JSON.parse(JSON.stringify(moviesArr));
  clonedMovies.slice(0, 21);
  clonedMovies.sort((elem1, elem2) => {
    if (elem1.title > elem2.title) {
      return 1;
    } else if (elem1.title < elem2.title) {
      return -1;
    } else {
      return 0;
    }
  });
  // clonedMovies.map (elem,index), return elem.title
  return clonedMovies;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average.
