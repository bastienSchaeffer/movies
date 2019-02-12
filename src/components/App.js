import React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';

function Loading() {
  return <h3>Loading...</h3>;
}

const Movies = Loadable({
  loader: () => import('./Movies'),
  loading: Loading
});

const MoviesRedux = Loadable({
  loader: () => import('./MoviesRedux'),
  loading: Loading
});

const MovieApp = styled.div`
  width: 96%;
  margin: auto;
`;

const App = () => (
  <MovieApp>
    <h1>App Movies</h1>
    <div fallback={<div>Loading...</div>}>
      <hr />
      <h2>With state</h2>
      <Movies />
      <hr />
      <h2>With Redux</h2>
      <MoviesRedux />
    </div>

  </MovieApp>
);

export default App;
