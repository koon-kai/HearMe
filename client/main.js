'use strict';
// import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';
require('./styles/main.scss');

const store = configureStore();

render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('main')
)
