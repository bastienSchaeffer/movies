import React from 'react'
// import { render, cleanup } from 'react-testing-library'
import App from './App'
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { render, fireEvent, cleanup } from 'react-testing-library'
import enableReduxDevtool from '../utils/enableReduxDevtool';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});
console.error = jest.fn();

//----------------
const storeEnhancer = compose(
  applyMiddleware(thunk),
  enableReduxDevtool
);

const renderComponent = (store) =>
  render(
    <Provider store={createStore(rootReducer, store, storeEnhancer)}>
      <App />
    </Provider>
  );

test('renders the app', () => {
  const { getByText } = renderComponent();
  expect(getByText('App Movies')).toBeInTheDocument();
});
