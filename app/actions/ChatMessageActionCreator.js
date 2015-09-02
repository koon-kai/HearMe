var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;


module.exports = {

    createMessage: function(text) {
        AppDispatcher.dispatch({
            type: ActionTypes.CREATE_MESSAGE,
            text: text,
        });
        //var message = ChatMessageUtils.getCreatedMessageData(text, currentThreadID);
        //ChatWebAPIUtils.createMessage(message);
    },

};