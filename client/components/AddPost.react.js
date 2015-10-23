
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var PostStore = require('../stores/PostStore');
var PostActionCreators = require('../actions/PostActionCreators');

var NewForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var title = React.findDOMNode(this.refs.title).value.trim();
        var content = React.findDOMNode(this.refs.content).value.trim();
        if (!title || !content) {
            return;
        }
        this.props.onPostSubmit({title: title, content: content});
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="title" ref="title"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="20" placeholder="Write your content (support markdown)" ref="content">
                    </textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
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

var AddPost = React.createClass({
    mixins: [Navigation],

    handleFormSubmit: function(post) {
        PostActionCreators.addPost(post);
    },
    componentDidMount: function() {
        PostStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        PostStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <div id="add-post">
                <div className="row">
                    <div className="col-lg-8">
                        <NewForm onPostSubmit={this.handleFormSubmit}/>
                    </div>
                    <div className="col-lg-4">
                        <UploadImage />
                    </div>
                </div>
            </div>
        );
    },
    _onChange: function() {
        this.transitionTo('post',{id:PostStore.getPostId()});
    }
});


module.exports = AddPost;