import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getMovieCredits,
  getMovieDetails,
  getRecommendedMovies,
  getTopRatedMovies,
  searchMovies,
} from '../../api/api';

// //decidir si son varios slices o con uno solo
// //renombrar en caso de que sean varios para dar a entender que
// //solo es el de top rated y no en general

export const getTopRated = createAsyncThunk(
  'movies/topRated',
  getTopRatedMovies,
);

export const getRecommended = createAsyncThunk(
  'movies/recommended',
  getRecommendedMovies,
);

export const getSearchResults = createAsyncThunk('movies/search', searchMovies);

export const getMovie = createAsyncThunk('movies/movie', getMovieDetails);

export const getCast = createAsyncThunk('movies/cast', getMovieCredits);

interface Movie {
  rating: number;
  title: string;
  picture: string;
  movieId: number;
}

interface SearchMovie {
  id: number;
  vote_average: number;
  poster_path: string;
  title: string;
}

interface MovieDetails {
  backdrop_path: string;
  title: string;
  overview: string;
  production_companies: any[];
  genres: any[];
  vote_average: number;
  release_date: string;
}

interface Cast {
  profile_path: string;
  name: string;
}

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    topRatedMovies: [] as Movie[],
    recommendedMovies: [] as Movie[],
    movieDetails: {
      backdrop_path: '',
      title: '',
      overview: '',
      production_companies: [],
      genres: [],
      vote_average: 0,
      release_date: '',
    } as MovieDetails,
    castOfMovie: [] as Cast[],
    searchResults: [] as SearchMovie[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopRated.pending, state => {
      console.log('esta pendiente');
      state.loading = true;
    });

    builder.addCase(getTopRated.fulfilled, (state, action) => {
      console.log('se realizo la peticion');
      console.log('este es el payload recibido', action);
      state.topRatedMovies = action.payload;
      state.loading = false;
    });

    builder.addCase(getTopRated.rejected, state => {
      state.loading = false;
    });

    /********** */

    builder.addCase(getRecommended.pending, state => {
      state.loading = true;
    });

    builder.addCase(getRecommended.fulfilled, (state, action) => {
      state.recommendedMovies = action.payload;
      state.loading = false;
    });

    builder.addCase(getRecommended.rejected, state => {
      state.loading = false;
    });

    /********** */

    builder.addCase(getSearchResults.pending, state => {
      state.loading = true;
    });

    builder.addCase(getSearchResults.fulfilled, (state, action) => {
      state.searchResults = action.payload;
      state.loading = false;
    });

    builder.addCase(getSearchResults.rejected, state => {
      state.loading = false;
    });

    /********** */

    builder.addCase(getCast.pending, state => {
      state.loading = true;
    });

    builder.addCase(getCast.fulfilled, (state, action) => {
      state.castOfMovie = action.payload;
      state.loading = false;
    });

    builder.addCase(getCast.rejected, state => {
      state.loading = false;
    });

    /********** */

    builder.addCase(getMovie.pending, state => {
      state.loading = true;
    });

    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
      state.loading = false;
    });

    builder.addCase(getMovie.rejected, state => {
      state.loading = false;
    });
  },
});

export default movieSlice.reducer;
