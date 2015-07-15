

var HearMeAppDispatcher = require('../dispatcher/HearMeAppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

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
        return {data: _posts};
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


PostStore.dispatchToken = HearMeAppDispatcher.register(function(action){

    // console.log(action);
    switch(action.type) {
        case ActionTypes.ADD_POST:
            // console.log('add post');
            _post = action.data;
            PostStore.emitChange();
            break;
        case ActionTypes.GET_POST:
            // console.log('get post');
            _post = action.data;
            PostStore.emitChange();
            break;
        case ActionTypes.GET_POSTS:
            // console.log('get posts');
            _posts = action.data;
            PostStore.emitChange();
            break;
        default:
            console.log('else');
    }
    
});


module.exports = PostStore;