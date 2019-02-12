export const MOVIES_FAILURE = 'MOVIES_FAILURE';
export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_SAVE = 'MOVIES_SAVE';

export const moviesFailure = error => ({
  type: MOVIES_FAILURE,
  error: error,
});

export const moviesRequest = {
  type: MOVIES_REQUEST,
};

export const moviesSave = movies => ({
  type: MOVIES_SAVE,
  movies,
});

export const fetchMovies = () => dispatch => {

  dispatch(moviesRequest);

  return fetch('https://facebook.github.io/react-native/movies.json')
    .then(res => res.json())
    .then(json => {
      console.log(json.movies);
      dispatch(moviesSave(json.movies))
    })
    .catch(err => dispatch(moviesFailure(err)));
};
