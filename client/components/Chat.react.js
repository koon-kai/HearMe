
import React from 'react';
import MessageStore from '../stores/ChatMessageStore';
import tools from '../utils/tools';

var ReactPropTypes = React.PropTypes;
var ENTER_KEY_CODE = 13;

var MessageComposer = React.createClass({

    getInitialState: function() {
        return {text: ''};
    },
    render: function() {
        return (
            <div>
                <input type="text" placeholder="Nick Name" className="message-name"/>
                <input type="email" placeholder="Your Email" className="message-email"/>
                <textarea 
                    className="message-composer"
                    name="message"
                    placeholder="Say Something."
                    value={this.state.text}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown} />
            </div>
        );
    },
    _onChange: function(event, value) {
        this.setState({text: event.target.value});
    },
    _onKeyDown: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.state.text.trim();
            if (text) {

            }
            this.setState({text:''});
        }
    },
});

var MessageListItem = React.createClass({

    PropTypes: {
        message: ReactPropTypes.object
    },
    render: function() {
        var message = this.props.message;
        return (
            <li className="message-list-item">
                <h5 className="message-author-name">{message.authorName}</h5>
                <div className="message-time">
                    {message.timestamp}
                </div>
                <div className="message-text">{message.text}</div>
            </li>
        );
    }
});

var getStateFromStores = function() {
    return {
        messages: MessageStore.getAllMessages(),
    }
}

var MessageSection = React.createClass({

    getInitialState:function() {
        return getStateFromStores();
    },

    render: function() {
        var messageListItems = this.state.messages.map(function(message){
            return (
                <MessageListItem key={message.id} message={message} />
            );
        });
        return (
            <div className="message-section">
                <ul className="message-list" ref="messageList">
                    {messageListItems}
                </ul>
                <MessageComposer />
            </div>
        )
    }
});



module.exports = MessageSection;