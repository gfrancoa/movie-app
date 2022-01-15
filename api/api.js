import {API_HOST, API_KEY, API_TOKEN} from '../utils/constants';

//recommended movies based on popular ones. Only first page shown
export function getRecommendedMovies() {
  const url = `${API_HOST}/movie/popular${API_KEY}&language=en-US&page=1`;
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('error when retrieving recommended', err);
      return err;
    });
}

//Top rated movies. Only first page results
export function getTopRatedMovies() {
  const url = `${API_HOST}/movie/top_rated${API_KEY}&language=en-US&page=1`;
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('error when retrieving most rated movies', err);
      return err;
    });
}

//get details of a movie using its id
export function getMovieDetails(movieId) {
  const url = `${API_HOST}/movie/${movieId}${API_KEY}&language=en-US`;
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('error when retrieving movie', err);
      return err;
    });
}

//search movies in the search bar
export function searchMovies(query) {
  const url = `${API_HOST}/search/movie${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('error when searching', err);
      return err;
    });
}

//get cast of the movie
export function getMovieCredits(movieId) {
  const url = `${API_HOST}/movie/${movieId}/credits${API_KEY}&language=en-US&page=1`;
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('error when retrieving credits', err);
      return err;
    });
}
