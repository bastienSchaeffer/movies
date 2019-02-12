import React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';

/*
  Split component loading
*/
const Loading = () => (<h3>Loading...</h3>);
const MoviesState = Loadable({
  loader: () => import('./MoviesState'),
  loading: Loading,
});
const MoviesRedux = Loadable({
  loader: () => import('./MoviesRedux'),
  loading: Loading,
});


const App = () => (
  <MovieApp>
    <h1>App Movies</h1>
    {/* Movies with state */}
    <MoviesCard>
      <h2>With state</h2>
      <MoviesState />
    </MoviesCard>
    {/* Movies with redux */}
    <MoviesCard>
      <h2>With Redux</h2>
      <MoviesRedux />
    </MoviesCard>
  </MovieApp>
);

export default App;

const MovieApp = styled.div`
  width: 96%;
  margin: auto;
`;

const MoviesCard = styled.div`
  margin: 20px 0;
  padding: 10px 0;
  border-top: solid 1px black;
`;
