async function APIfetchMovies() {
  const response = await fetch('https://facebook.github.io/react-native/movies.json');
  if (response.status >= 400) {
    throw new Error('Error fetching movies');
  } else {
    return response.json();
  }
}

export default APIfetchMovies;
