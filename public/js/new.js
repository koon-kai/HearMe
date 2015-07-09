

var NewForm = React.createClass({
    // handleSubmit: function(e) {
    //     e.preventDefault();
    //     var title = React.findDOMNode(this.refs.title).value.trim();
    //     var content = React.findDOMNode(this.refs.content).value.trim();
    //     if (!title || !content) {
    //         return;
    //     }
    //     this.props.onCommentSubmit({title: title, content: content});
    // },
    render: function() {
        return (
            <form action='/post' method='post'>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="title" name="title"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="20" placeholder="Write your content (support markdown)" name="content">
                    </textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
});

var UploadImage = React.createClass({
    openSelectWindow: function() {
        $('#upload_image').click();
        return false;
    },
    uploadImage: function() {
        console.log('change');

        var data = new FormData();
        $.each($('#upload_image')[0].files, function(i, file) {
            data.append('imageFile', file);
            console.log(i);
            console.log(file.type);
            console.log(file.name);
        });

        $.ajax({
            url: 'upload',
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

var NewBox = React.createClass({

    // handleFormSubmit: function(post) {
    //     console.log(post);
    //     $.post('/post', post).then(function(res){
    //         console.log(res);
    //     }, function(err){
    //         console.log(err);
    //     })
    // },

    render: function() {
        return (
            <div className="row">
                <div className="col-lg-8">
                    <NewForm />
                </div>
                <div className="col-lg-4">
                    <UploadImage />
                </div>
            </div>
        );
    }
});


React.render(
    <NewBox />, document.getElementById('new')
);
