import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import postsReducer from './posts';

const rootReducer = combineReducers({
  postsReducer,
  router
});

export default rootReducer;