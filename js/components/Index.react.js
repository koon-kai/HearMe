
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Post = React.createClass({
    render: function() {
        var postUrl = "/post/" + this.props.data._id;
        // console.log('post:'+this.props.data._id);
        
        return (
            <div className="post">
                <div className="post-title">
                    <Link to="post" params={{id:this.props.data._id}}>{this.props.data.title}</Link>
                </div>
                <div className="post-date">
                    {this.props.data.createAt}
                </div>
            </div>
        );
    }
});


var PostList = React.createClass({
    render: function() {
        var posts = this.props.data.map(function(post,i){
            return (
                <Post data={post} key={i}/>
            );
        });
        return (
            <div className="post-list">
                {posts}
            </div>
        )
    }
});

var Index = React.createClass({
    getInitialState: function() {
        return {data:[]};
    },
    loadPostsFromServer: function() {
        $.ajax({
            url: "/posts",
            dataType: 'json',
            success: function(data) {
                this.setState({data:data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("/posts", status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.loadPostsFromServer();
    },
    render: function() {
        return (
            <PostList data={this.state.data} />
        )
    }
});


module.exports = Index;