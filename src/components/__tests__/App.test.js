import React from 'react';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import thunk from 'redux-thunk';

import App from '../App';
import enableReduxDevtool from '../../utils/enableReduxDevtool';
import rootReducer from '../../reducers';

/*
  Keep all clean
*/
afterEach(() => {
  cleanup();
  // eslint-disable-next-line no-console
  console.error.mockClear();
});
// eslint-disable-next-line no-console
console.error = jest.fn();

/*
  Connect
*/
const storeEnhancer = compose(
  applyMiddleware(thunk),
  enableReduxDevtool,
);
const renderComponent = store => render(
  <Provider store={createStore(rootReducer, store, storeEnhancer)}>
    <App />
  </Provider>,
);

test('renders the app', () => {
  const { getByText } = renderComponent();
  expect(getByText('App Movies')).toBeInTheDocument();
});
