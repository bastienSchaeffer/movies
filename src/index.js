import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Global from './utils/globalStyles'
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import enableReduxDevtool from './utils/enableReduxDevtool';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

const storeEnhancer = compose(
  applyMiddleware(thunk),
  enableReduxDevtool
);
const store = createStore(rootReducer, storeEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
