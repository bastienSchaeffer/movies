import React, { useState, useEffect } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true)
    await fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        const fetchedMovies = responseJson.movies;
        setMovies(fetchedMovies);
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false)
      });
  }

  useEffect(() => {
    // If movies required on ComponentDidMount
    // fetchMovies();
  }, []);

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
      <button
        data-testid='load-movie-button'
        onClick={fetchMovies}>
        Load Movies
      </button>
    </div>
  );
};

export default Movies;
