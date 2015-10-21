

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

import Api from '../utils/WebAPIUtils';

var _posts = [];
var _post = {};

var PostStore = assign({}, EventEmitter.prototype, {

    init: function() {

    },

    getPostId: function() {
        return _post._id;
    },

    getPost: function() {
        return _post;
    },

    getPosts: function() {
        return _posts;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

var errHandler = function(err) {
    console.log(err);
}

PostStore.dispatchToken = AppDispatcher.register(function(action){

    switch(action.type) {
        case ActionTypes.ADD_POST:
            Api.addPost(action.data).then(function(data){
                _post = data;
                PostStore.emitChange();
            }, errHandler);
            break;

        case ActionTypes.GET_POST:
            Api.getPost(action.id).then(function(data){
                _post = data.success ? data.data : null ;
                PostStore.emitChange();
            }, errHandler);
            break;

        case ActionTypes.GET_POSTS:
            Api.getPosts().then(function(data){
                _posts = data;
                PostStore.emitChange();
            }, errHandler);
            break;

        default:
            // do something common
    }
    
});


module.exports = PostStore;