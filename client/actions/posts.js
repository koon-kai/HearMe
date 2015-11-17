
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

function savePost(newPost) {
  return dispatch => {
    let formData = new FormData(newPost);
    formData.append('title', newPost.title);
    formData.append('content', newPost.content);
    formData.append('public', newPost.public);
    formData.append('createAt', newPost.createAt);
    return fetch('/api/posts',{
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(json => dispatch(savePostReturn(json)));
  }
}

function savePostReturn(newPost) {
  return { type: types.ADD_POST, post: newPost};
}

export function getPosts() {
  return dispatch => dispatch(fetchPosts());
}

export function getPost(id) {
  console.log('getPost');
  return dispatch => dispatch(fetchPost(id));
}

export function addPost(newPost) {
  return dispatch => dispatch(savePost(newPost));  
}