
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PostStore = require('../stores/PostStore');
var PostActionCreators = require('../actions/PostActionCreators');


var Post = React.createClass({
    render: function() {
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
        return PostStore.getPosts();
    },
    loadPostsFromServer: function() {
        PostActionCreators.getPosts();
    },
    componentDidMount: function() {
        this.loadPostsFromServer();
        PostStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        PostStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <PostList data={this.state.data} />
        )
    },
    _onChange: function() { 
        console.log('_onChange');
        this.setState(PostStore.getPosts());
    }
});


module.exports = Index;