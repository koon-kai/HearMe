
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
// import history from '../utils/history';
import createHistory from 'history/lib/createBrowserHistory';
// import routes from '../routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root';
import Admin from '../containers/admin/AdminPage';
import NotFoundPage from '../components/NotFoundPage.react';
import WorkbenchPage from '../containers/admin/WorkbenchPage';



const routes = (
  <Route component={Admin}>
    <Route path="/admin/workbench" component={WorkbenchPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);


const composeCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState) {
  return composeCreateStore(rootReducer, initialState);
}