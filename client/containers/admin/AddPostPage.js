
import React from 'react';
import marked from 'marked';
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts';
const Mui = require('material-ui');
const { RaisedButton } = Mui;
import { History } from 'react-router';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

var NewForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      content: '',
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    let title = this.refs.title;
    let content = this.refs.content;
    let createAt = this.refs.createAt;
    let status = this.refs.status.checked;

    if (!title.value.trim()) {
      title.focus();
      return;
    }
    if (!content.value) {
      content.focus();
      return;
    }
    if (!createAt.value) {
      createAt.focus();
      return;
    }

    this.props.onPostSubmit({
      title: title.value.trim(),
      content: content.value,
      createAt: createAt.value,
      public: !status
    })
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <div className="row">
          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">mode_edit</i>
              <input id="title" type="text" className="validate"  ref="title"/>
              <label htmlFor="title">title</label>
            </div>
          </div>
          <div className="col s3">
            <div className="input-field">
              <i className="material-icons prefix">schedule</i>
              <input type="datetime-local" className="validate"  ref="createAt"/>
            </div>
          </div>
          <div className="col s2">
          <div className="input-field">
            <input type="checkbox" id="status" ref="status"/>
            <label htmlFor="status">Private</label>
            </div>
          </div>
          <div className="col s1">
            <div className="post-submit">
              <RaisedButton label="Submit" type="submit" primary={true} />
            </div>
          </div>
        </div>
        <div className="input-field col s12" id="editor">
          <textarea className="" ref="content" id="content" valueLink={this.linkState('content')}></textarea>
          <label htmlFor="content">content</label>
          <div className="translated" dangerouslySetInnerHTML={{__html: marked(this.state.content)}} ></div>
        </div>
      </form>
    );
  }
});

var UploadImage = React.createClass({
    openSelectWindow: function(e) {
        e.preventDefault();
        $('#upload_image').click();
    },
    uploadImage: function() {
 
        var data = new FormData();
        $.each($('#upload_image')[0].files, function(i, file) {
            data.append('imageFile', file);
            console.log(i);
            console.log(file.type);
            console.log(file.name);
        });

        $.ajax({
            url: '/photo/upload',
            type: 'POST',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function(res) {
                console.log(res);
                this.setState({imageUrl:res.data.imageUrl});
            }.bind(this),
            error: function() {
                alert('upload error!');
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {imageUrl: ''};
    },
    render: function() {
        var url = this.state.imageUrl;
        if (url!='') {
            url = url + '?imageView2/1/w/285/q/100/interlace/1';
        }
        return (    
            <div className="upload">
                <button className="btn btn-info" onClick={this.openSelectWindow}>Upload Image</button>
                <input type="file" className="hide" id="upload_image" onChange={this.uploadImage} />
                <div className="alert alert-warning image-url">
                    <span>{this.state.imageUrl}</span>
                </div>
                <img src={url} />
            </div>
        );
    }
});

var AddPostPage = React.createClass({
  mixins: [History],

  handleFormSubmit: function(newPost) {
    const { dispatch } = this.props;
    dispatch(addPost(newPost));
    this.history.pushState(null, '/admin/workbench');
  },

  render: function() {
    return (
      <div id="add-post">
        <NewForm onPostSubmit={this.handleFormSubmit}/>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(AddPostPage);
