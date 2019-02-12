import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListMovies = ({
  error,
  isLoading,
  movies,
  onClickLoadMovies,
}) => (
  <Fragment>
    {
      // Display the error
      !!error
      && (
        <div data-testid="error">
          <p data-testid="error-message">{error}</p>
        </div>
      )
    }
    {
      // Display the loading
      isLoading
      && (
        <div data-testid="is-loading">
          <p>...Loading</p>
        </div>
      )
    }
    {
      // Display the movies
      movies.length
        ? (
          <ul data-testid="list-movies">
            {
              movies.map(({ id, title }) => (
                <li key={id} data-testid="movie">
                  <span>{title}</span>
                </li>
              ))
            }
          </ul>
        )
        : ''
    }
    <button
      type="button"
      data-testid="load-movie-button"
      onClick={onClickLoadMovies}
    >
      Load Movies
    </button>
  </Fragment>
);


ListMovies.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onClickLoadMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      year: PropTypes.string,
    }),
  ),
};

ListMovies.defaultProps = {
  error: null,
  movies: [],
};
export default ListMovies;
