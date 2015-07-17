

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;


module.exports = {

    getPosts: function() {
        AppDispatcher.dispatch({
            type: ActionTypes.GET_POSTS,
        });
    },

    getPost:function(id) {
        AppDispatcher.dispatch({
            type: ActionTypes.GET_POST,
            id: id,
        });
    },

    addPost: function(post) {
        AppDispatcher.dispatch({
            type: ActionTypes.ADD_POST,
            data: post,
        });
    }
};