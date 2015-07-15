

var HearMeAppDispatcher = require('../dispatcher/HearMeAppDispatcher');
var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;

import Api from '../utils/WebAPIUtils';

module.exports = {

    getPosts: function() {
        // console.log('actions');
        Api.getPosts().then(function(data){
            HearMeAppDispatcher.dispatch({
                type: ActionTypes.GET_POSTS,
                data: data
            });
        }, function(err){
            console.log(err);
        });
    },

    getPost:function(id) {
        Api.getPost(id).then(function(data){
            // console.log(data);
            if (data.success == true) {
                data = data.data;
            } else {
                data = null;
            }
            HearMeAppDispatcher.dispatch({
                type: ActionTypes.GET_POST,
                data: data,
            });
        }, function(err){
            console.log(err);
        });
    },

    addPost: function(post) {
        Api.addPost(post).then(function(data){
            HearMeAppDispatcher.dispatch({
                type: ActionTypes.ADD_POST,
                data: data,
            })
        }, function(err){
            console.log(err);
        })
    }
};