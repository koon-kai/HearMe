

var Post = React.createClass({

    render: function() {

        var post = this.props.data;
        console.log(post);
        return (
            <div className="post">
                <div className="post-title">
                </div>
                <div className="post-content">
                </div>
            </div>
        )
    }
});


React.render(
    <Post data={post} />, document.getElementById('post')
)