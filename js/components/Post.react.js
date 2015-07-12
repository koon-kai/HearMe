
var React = require('react');


var Post = React.createClass({
    getInitialState: function() {
        return {post:{}};
    },
    loadPostById: function(id) {
        $.ajax({
            type: "get",
            url: "/post/" + id,
            dataType: 'json',
            success: function(data) {
                this.setState({post:data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("/post", status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        var id = this.props.params.id;
        this.loadPostById(id);
    },
    render: function() {
        return (
            <div id="post">
                <div className="post-title">
                    <h3>{this.state.post.title}</h3>
                </div>
                <div className="post-content">
                    <span dangerouslySetInnerHTML={{__html: this.state.post.content}} />
                </div>
            </div>
        )
    }
});

module.exports = Post;

