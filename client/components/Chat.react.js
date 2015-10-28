
import React, { PropTypes, Component } from 'react';
import tools from '../utils/tools';


export class MessageComposer extends Component {
  constructor(props) {
    super(props);
    this.handeSubmit = this.handeSubmit.bind(this);
    this.handeKeyDown = this.handeKeyDown.bind(this);
  }

  handeKeyDown(e) {
    if (e.keyCode === 13) {
      this.handeSubmit();
    }
  }

  handeSubmit() {
    const text = this.refs.text;
    const name = this.refs.name;
    if(!text.value.trim()) {
      text.focus();
      return;
    }
    if(!name.value.trim()) {
      name.focus();
      return;
    }
    this.props.handeSubmit(name.value, text.value);
    text.value = '';
  }

  render() {
    return (
      <div className="message-form">
        <textarea 
          className="message-composer"
          ref="text"
          placeholder="Say Something." 
          onKeyDown={this.handeKeyDown} />
          <input 
            type="text" 
            placeholder="Nick Name" 
            className="message-name" 
            ref="name"
            onKeyDown={this.handeKeyDown} />
          <button className="btn btn-info" onClick={this.handeSubmit}>Send</button>
      </div>
    );
  }
}

MessageComposer.propsTypes = {
  value: PropTypes.string.isRequired,
  handeSubmit: PropTypes.func.isRequired,
}


export class MessageListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return (
      <li className="message-list-item">
        <h5 className="message-author-name">{message.name}</h5>
          <div className="message-time">
            {tools.formatToDateTime(message.createAt)}
          </div>
          <div className="message-text">{message.text}</div>
      </li>
    );
  }
}

MessageListItem.propsTypes = {
  message: PropTypes.object.isRequired
}



// export MessageComposer;
// export MessageListItem;