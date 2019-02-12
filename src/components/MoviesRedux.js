import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListMovies from './ListMovies';
import { fetchMovies } from '../actions';

const MoviesRedux = ({
  error,
  movies,
  isLoading,
  loadingMovies,
}) => {
  const onClickLoadMovies = () => {
    loadingMovies();
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
  loadingMovies: PropTypes.func.isRequired,
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


const mapDispatchToProps = dispatch => ({
  loadingMovies: () => dispatch(fetchMovies),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesRedux);
