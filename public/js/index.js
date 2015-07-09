
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouterHandler;




var Post = React.createClass({

    render: function() {
        var postUrl = "/post/" + this.props.post._id;
        
        return (
            <div className="post">
                <div className="post-title">
                    <a href={postUrl}>{this.props.post.title}</a>
                </div>
                <div className="post-date">
                    {this.props.post.createAt}
                </div>
            </div>
        );
    }
});


var PostList = React.createClass({
    render: function() {
        var posts = this.props.data.map(function(post){
            return (
                <Post post={post}></Post>
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
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data:data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
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



React.render(
    <Index url="/posts" />, document.getElementById('index')
);