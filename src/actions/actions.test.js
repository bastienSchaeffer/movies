import * as actions from '.';

describe('Movies actions', () => {
  it('should save the movies', () => {
    const movies = {
      movies: {
        error: null,
        isLoading: false,
        movies: [
          { id: 'movie_1', title: 'Title movie one' },
          { id: 'movie_2', title: 'Title movie two' },
        ],
      },
    };
    const expectedAction = {
      type: actions.MOVIES_SAVE,
      movies,
    };
    expect(actions.moviesSave(movies)).toEqual(expectedAction);
  });

  it('should save error', () => {
    const error = {
      message: 'An error occured',
    };
    const expectedAction = {
      type: actions.MOVIES_FAILURE,
      error,
    };
    expect(actions.moviesFailure(error)).toEqual(expectedAction);
  });
});
