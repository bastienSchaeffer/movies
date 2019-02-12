import reducer from './Movies';
import {
  MOVIES_FAILURE,
  MOVIES_REQUEST,
  MOVIES_SAVE,
} from '../actions';

describe('Movies reducer', () => {
  const initialState = {
    error: null,
    isLoading: false,
    movies: [],
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle MOVIES_FAILURE', () => {
    const state = { ...initialState, isLoading: true };
    const error = 'Error';

    expect(
      reducer(state, {
        type: MOVIES_FAILURE,
        error,
      }),
    ).toEqual({
      ...initialState,
      error,
      isLoading: false,
    });
  });

  it('should handle MOVIES_REQUEST', () => {
    const state = { ...initialState, isLoading: false };
    expect(
      reducer(state, {
        type: MOVIES_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle MOVIES_SAVE', () => {
    const state = { ...initialState, isLoading: true };
    const movies = [
      { id: 'movie_1', title: 'Title movie one' },
      { id: 'movie_2', title: 'Title movie two' },
    ];
    expect(
      reducer(state, {
        type: MOVIES_SAVE,
        movies,
      }),
    ).toEqual({
      ...initialState,
      movies,
      isLoading: false,
    });
  });
});
