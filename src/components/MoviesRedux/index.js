import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies } from '../../actions';

const MoviesRedux = ({
  error,
  movies,
  isLoading,
  fetchMovies,
}) => {

  const onLoadMoviesClick = () => {
    fetchMovies();
  }

  return (
    <div>
      <h2>Movies</h2>
      {
        // Display the error from component's state
        !!error &&
        <div data-testid='error'>
          <p data-testid='error-message'>{error}</p>
        </div>
      }
      {
        // Display the loading from component's state
        isLoading &&
        <div data-testid='is-loading'>
          <p>...Loading</p>
        </div>
      }
      {
        // Display the movies from component's state
        movies.length
          ? <ul data-testid='list-movies'>
            {
              movies.map(({ id, title }) => (
                <li key={id} data-testid='movie'>
                  <h3>{title}</h3>
                </li>
              ))
            }
          </ul>
          : ''
      }
      <button data-testid='load-movie-button' onClick={onLoadMoviesClick}>Load Movies</button>
    </div>
  );
};

MoviesRedux.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      year: PropTypes.string,
    }),
  ),
};

MoviesRedux.defaultProps = {
  error: null,
  movies: [],
};

const mapStateToProps = state => {
  const {
    error,
    movies,
    isLoading,
  } = state.movies;

  return {
    error,
    movies,
    isLoading,
  };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(MoviesRedux);
