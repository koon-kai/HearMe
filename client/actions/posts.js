
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';


function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  }
}

function receivePosts(json) {
  return {
    type: types.RECEIVE_POSTS,
    posts: json,
    receivedAt: Date.now()
  }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());
    return fetch('/api/posts')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  }
}

function fetchPost(id) {
  return dispatch => {
    dispatch(requestPosts());
    return fetch(`/api/posts/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  }
}


export function getPosts() {
  return dispatch => dispatch(fetchPosts());
}

export function getPost(id) {
  console.log('getPost');
  return dispatch => dispatch(fetchPost(id));
}

export function addPost(title, content) {
  return { type: types.ADD_POST, title, content };
}