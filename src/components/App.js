import React from 'react';
import styled from 'styled-components';
import Movies from './Movies';
import MoviesRedux from './MoviesRedux'

const MovieApp = styled.div`
  width: 96%;
  margin: auto;
`;

const App = () => (
  <MovieApp>
    <h1>App Movies</h1>
    <hr />
    <h2>With state</h2>
    <Movies />
    <hr />
    <h2>With Redux</h2>
    <MoviesRedux />
  </MovieApp>
);

export default App;
