import React from 'react';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import thunk from 'redux-thunk';

import MoviesRedux from '../MoviesRedux';
import enableReduxDevtool from '../../utils/enableReduxDevtool';
import rootReducer from '../../reducers';
/*
  Keep all clean
*/
afterEach(() => {
  cleanup();
  console.error.mockClear();
});
console.error = jest.fn();

/*
  Connect
*/
const storeEnhancer = compose(
  applyMiddleware(thunk),
  enableReduxDevtool,
);
const renderComponent = store => render(
  <Provider store={createStore(rootReducer, store, storeEnhancer)}>
    <MoviesRedux />
  </Provider>,
);

/*
  Test when loading the movies by clicking on the loadMovieButton button
*/
describe('MoviesRedux', () => {
  test('renders the loading and an error message when failing', async () => {
    const { getAllByTestId } = renderComponent({
      movies: {
        error: null,
        isLoading: false,
        movies: [
          { id: 'movie_1', title: 'Title movie one' },
        ],
      },
    });
    expect(getAllByTestId('movie').length).toBe(1);
  });
});
