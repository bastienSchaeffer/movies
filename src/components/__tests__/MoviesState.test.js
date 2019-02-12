import React from 'react';
import {
  render,
  waitForElement,
  fireEvent,
  cleanup,
} from 'react-testing-library';
import MoviesState from '../MoviesState';

/*
  Keep all clean
*/
afterEach(() => {
  cleanup();
  console.error.mockClear();
});
console.error = jest.fn();

/*
  Test when loading the movies on ComponentDidMount
*/
describe.skip('MoviesState on ComponentDidMount', () => {
  test('renders an error when fetch fails', async () => {
    // Arrange
    const errorFetch = 'Unsuccessful request';
    fetch.mockReject(new Error(errorFetch));
    // Act
    const { getByTestId } = render(<MoviesState />);
    await waitForElement(() => getByTestId('error'));
    // Assert
    expect(getByTestId('error-message').textContent).toBe(errorFetch);
  });

  test('renders the movies when fetch successes', async () => {
    // Arrange
    const movies = {
      movies: [
        { id: 'movie_1', title: 'Title movie one' },
        { id: 'movie_2', title: 'Title movie two' },
      ],
    };
    fetch.mockResponseOnce(JSON.stringify(movies));
    // Act
    const { getByTestId, getAllByTestId, getByText } = render(<MoviesState />);
    await waitForElement(() => getByTestId('list-movies'));
    // Assert
    expect(getAllByTestId('movie').length).toBe(movies.movies.length);
    expect(getByText('Title movie one')).toBeInTheDocument();
    expect(getByText('Title movie two')).toBeInTheDocument();
  });
});

/*
  Test when loading the movies by clicking on the loadMovieButton button
*/
describe('MoviesState', () => {
  test('renders the loading and an error message when failing', async () => {
    // Arrange
    const errorFetch = 'Unsuccessful request';
    fetch.mockReject(new Error(errorFetch));
    // Act
    const { getByTestId, queryByTestId } = render(<MoviesState />);
    const loadMovieButton = queryByTestId('load-movie-button');
    fireEvent.click(loadMovieButton);
    // Assert
    expect(queryByTestId('is-loading')).toBeTruthy();
    const errorContainer = await waitForElement(() => getByTestId('error-message'));
    expect(errorContainer).toHaveTextContent(errorFetch);
    expect(queryByTestId('is-loading')).toBeFalsy();
  });

  test('renders the loading and the movies when succesful', async () => {
    // Arrange
    const movies = {
      movies: [
        { id: 'movie_1', title: 'Title movie one' },
        { id: 'movie_2', title: 'Title movie two' },
      ],
    };
    fetch.mockResponseOnce(JSON.stringify(movies));
    // Act
    const {
      getByTestId, queryByTestId, getAllByTestId,
    } = render(<MoviesState />);
    const loadMovieButton = queryByTestId('load-movie-button');
    fireEvent.click(loadMovieButton);
    expect(queryByTestId('is-loading')).toBeTruthy();
    await waitForElement(() => getByTestId('list-movies'));
    // Assert
    expect(getAllByTestId('movie').length).toBe(2);
    expect(queryByTestId('is-loading')).toBeFalsy();
  });
});
