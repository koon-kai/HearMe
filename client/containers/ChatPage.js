
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { MessageComposer, MessageListItem} from '../components/Chat.react';
import { getMessages, createMessage } from '../actions/chat';


class ChatPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getMessages());
  }

  handeSubmit(name, text) {
    const { dispatch } = this.props;
    dispatch(createMessage(name, text));
  }

  render() {
    const { isFetching, messages } = this.props;
    // console.log(messages);
    return (
      <div className="message-section">
        <MessageComposer handeSubmit={this.handeSubmit.bind(this)} />
        <hr/>
        {isFetching &&
          <h4 className="loading">Loading...</h4>
        }
        {!isFetching &&
        <ul className="message-list" ref="messageList">
          { messages.map(message => {
            return <MessageListItem key={message._id} message={message} />
          })}
        </ul>
        }
      </div>
    )
  }
}


ChatPage.propsTypes = {
  messages: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  // console.log(state);
  const { chatReducer: { isFetching, messages} } = state;
  // console.log(messages);
  return {
    messages,
    isFetching,
  }
}

export default connect(mapStateToProps)(ChatPage);