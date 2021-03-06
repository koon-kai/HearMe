
import React, { Component } from 'react';
import { Link } from 'react-router';


class EditBox extends Component {
  render() {
    return (
      <div className="fixed-action-btn" style={{bottom: '45px',right: '24px'}}>
        <a className="btn-floating btn-large red">
          <i className="large material-icons">mode_edit</i>
        </a>
        <ul>
          <li><Link className="btn-floating red" to="/admin/posts/add"><i className="material-icons">queue</i></Link></li>
          <li><a className="btn-floating yellow darken-1"><i className="material-icons">speaker_notes</i></a></li>
          <li><a className="btn-floating green"><i className="material-icons">picture_in_picture</i></a></li>
          <li><a className="btn-floating blue"><i className="material-icons">chat</i></a></li>
        </ul>
      </div>
    )
  }
}

export default EditBox;