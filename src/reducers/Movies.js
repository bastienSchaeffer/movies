import {
  MOVIES_FAILURE,
  MOVIES_REQUEST,
  MOVIES_SAVE,
} from '../actions';

const initialState = {
  error: null,
  isLoading: false,
  movies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        movies: [],
      };

    case MOVIES_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };

    case MOVIES_SAVE:
      return {
        ...state,
        error: null,
        isLoading: false,
        movies: action.movies,
      };

    default:
      return state;
  }
};
