import {API_HOST, API_KEY, API_TOKEN} from '../utils/constants';

//recommended movies based on popular ones. Only first page shown

export async function getRecommendedMovies() {
  const url = `${API_HOST}/movie/popular${API_KEY}&language=en-US&page=1`;
  const response = await fetch(url);
  return (await response.json()).results;
}

//Top rated movies. Only first page results
export async function getTopRatedMovies() {
  const url = `${API_HOST}/movie/top_rated${API_KEY}&language=en-US&page=1`;
  const response = await fetch(url);
  return (await response.json()).results;
}

//get details of a movie using its id
export async function getMovieDetails(movieId) {
  const url = `${API_HOST}/movie/${movieId}${API_KEY}&language=en-US`;
  const response = await fetch(url);
  return await response.json();
}

//search movies in the search bar
export async function searchMovies(query) {
  const url = `${API_HOST}/search/movie${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  const response = await fetch(url);
  return (await response.json()).results;
}

//get cast of the movie
export async function getMovieCredits(movieId) {
  const url = `${API_HOST}/movie/${movieId}/credits${API_KEY}&language=en-US&page=1`;
  const response = await fetch(url);
  return (await response.json()).cast;
}
