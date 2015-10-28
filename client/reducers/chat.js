import { GET_MESSAGES,ADD_MESSAGE, CREATE_MESSAGE, RECEIVE_MESSAGES, REQUEST_MESSAGES } from '../constants/ActionTypes';


const initialState = {
  isFetching: false,
  messages: [],
}

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MESSAGES:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_MESSAGES:
      return Object.assign({}, state, {
        isFetching: false,
        messages: action.messages
      })

    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [action.message, ...state.messages]
      });

    default:
      return state;
  }
}