import React, { Component } from 'react';

class App extends Component {
  state = {
    movies: [],
  }
  async componentDidMount() {
    await fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        const movies = responseJson.movies;
        this.setState({ movies });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const { movies } = this.state
    return (
      <div className="App">
        <h1>Movies</h1>
        {
          movies.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))
        }
      </div>
    );
  }
}

export default App;
