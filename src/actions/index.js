import APIfetchMovies from '../api';

export const MOVIES_FAILURE = 'MOVIES_FAILURE';
export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_SAVE = 'MOVIES_SAVE';

export const moviesFailure = error => ({
  type: MOVIES_FAILURE,
  error,
});

export const moviesRequest = {
  type: MOVIES_REQUEST,
};

export const moviesSave = movies => ({
  type: MOVIES_SAVE,
  movies,
});

export const fetchMovies = () => async (dispatch) => {
  dispatch(moviesRequest);

  try {
    const { movies } = await APIfetchMovies();
    dispatch(moviesSave(movies));
  } catch (err) {
    dispatch(moviesFailure(err.message));
  }
};
