import React from 'react'
import MoviesRedux from './'
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { render, cleanup } from 'react-testing-library'
import enableReduxDevtool from '../../utils/enableReduxDevtool';
import rootReducer from '../../reducers';
import thunk from 'redux-thunk';

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
  enableReduxDevtool
);
const renderComponent = (store) =>
  render(
    <Provider store={createStore(rootReducer, store, storeEnhancer)}>
      <MoviesRedux />
    </Provider>
  );

/*
  Test when loading the movies by clicking on the loadMovieButton button
*/
describe('rendering on clicking', () => {
  test('renders the loading and an error message when failing', async () => {
    const { container, getAllByTestId, queryByTestId } = renderComponent({
      movies: {
        error: null,
        isLoading: false,
        movies: [
          { id: 'movie_1', title: 'Title movie one' }
        ]
      }
    });
    expect(getAllByTestId('movie').length).toBe(1);
  });
});
