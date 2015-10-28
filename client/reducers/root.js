import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import postsReducer from './posts';
import chatReducer from './chat';

const rootReducer = combineReducers({
  chatReducer,
  postsReducer,
  router
});

export default rootReducer;