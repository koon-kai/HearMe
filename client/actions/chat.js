import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';


function requestMessages() {
  return {
    type: types.REQUEST_MESSAGES
  }
}

function receiveMessages(json) {
  return {
    type: types.RECEIVE_MESSAGES,
    messages: json,
    receivedAt: Date.now()
  }
}

function fetchMessages() {
  return dispatch => {
    dispatch(requestMessages());
    return fetch('/api/messages')
      .then(response => response.json())
      .then(json => dispatch(receiveMessages(json)));
  }
}

function addMessage(message) {
  console.log(message);
  return {
    type: types.ADD_MESSAGE,
    message: message
  }
}

export function getMessages() {
  return dispatch => dispatch(fetchMessages());
}

export function createMessage(name, text) {
  const message = new FormData();
  message.append('name', name);
  message.append('text', text);
  const options = {
    method: 'POST',
    body: message
  }
  return dispatch => {
    return fetch('/api/messages', options)
      .then(response => response.json())
      .then(json => dispatch(addMessage(json)));
  }
}