import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListMovies from './ListMovies';
import { fetchMovies } from '../actions';

const MoviesRedux = ({
  error,
  movies,
  isLoading,
  fetchMovies,
}) => {
  const onClickLoadMovies = () => {
    fetchMovies();
  };

  return (
    <div>
      <h3>Movies</h3>
      <ListMovies
        error={error}
        isLoading={isLoading}
        movies={movies}
        onClickLoadMovies={onClickLoadMovies}
      />
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

const mapStateToProps = (state) => {
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
  { fetchMovies },
)(MoviesRedux);
