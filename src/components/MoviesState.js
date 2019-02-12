import React, { useState, useEffect } from 'react';
import APIfetchMovies from '../api';
import ListMovies from './ListMovies';

const Movies = () => {
  const [moviesCollection, setMoviesCollection] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const { movies } = await APIfetchMovies();
      setMoviesCollection(movies);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    // If movies required on ComponentDidMount
    // fetchMovies();
  }, []);

  return (
    <div>
      <h3>Movies</h3>
      <ListMovies
        error={error}
        isLoading={isLoading}
        movies={moviesCollection}
        onClickLoadMovies={fetchMovies}
      />
    </div>
  );
};

export default Movies;
