import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import ListMovies from '../ListMovies';

/*
  Keep all clean
*/
afterEach(() => {
  cleanup();
  console.error.mockClear();
});
console.error = jest.fn();

const onClickLoadMovies = jest.fn();
const propsComponent = {
  error: null,
  isLoading: false,
  movies: [],
  onClickLoadMovies,
};

describe('ListMovies', () => {
  describe('render', () => {
    test('renders no loading, no error, no movies and a button', async () => {
      // Act
      const { container } = render(<ListMovies {...propsComponent} />);
      // Assert
      expect(container).toMatchSnapshot();
    });

    test('renders an error and a button ', async () => {
      // Arrange
      const propsWithError = {
        ...propsComponent,
        error: 'Failed to load',
      };
      // Act
      const { container } = render(<ListMovies {...propsWithError} />);
      // Assert
      expect(container).toMatchSnapshot();
    });

    test('renders a loading indicator ', async () => {
      // Arrange
      const propsWithLoading = {
        ...propsComponent,
        isLoading: true,
      };
      // Act
      const { container } = render(<ListMovies {...propsWithLoading} />);
      // Assert
      expect(container).toMatchSnapshot();
    });

    test('renders the movies ', async () => {
      // Arrange
      const propsWithMovies = {
        ...propsComponent,
        movies: [
          { id: 'movie_1', title: 'Title movie one' },
          { id: 'movie_2', title: 'Title movie two' },
        ],
      };
      // Act
      const { container } = render(<ListMovies {...propsWithMovies} />);
      // Assert
      expect(container).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    test('load movies button should call the props action', async () => {
      // Act
      const { getByTestId } = render(<ListMovies {...propsComponent} />);
      const loadMovieButton = getByTestId('load-movie-button');
      fireEvent.click(loadMovieButton);
      // Assert
      expect(onClickLoadMovies).toHaveBeenCalledTimes(1);
    });
  });
});
