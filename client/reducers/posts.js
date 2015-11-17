import { REQUEST_POSTS, RECEIVE_POSTS, GET_POSTS, GET_POST, ADD_POST } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  posts: [],
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })

    case GET_POST:
      return state;

    case ADD_POST:
      return Object.assign({}, state, {
        posts: [action.post, ...state.posts]
      })

    default:
      return state;
  }
}