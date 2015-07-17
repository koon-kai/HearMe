
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PostStore = require('../stores/PostStore');
var PostActionCreators = require('../actions/PostActionCreators');
import Loading from 'react-loading'

var Post = React.createClass({

    propTypes: {
        post: React.PropTypes.object
    },

    render: function() {
        var post = this.props.post;
        return (
            <section className="post">
                <div className="post-title">
                    <Link to="post" params={{id:post._id}}>{post.title}</Link>
                </div>
                <div className="post-date">
                    {post.createAt}
                </div>
            </section>
        );
    }
});


var PostList = React.createClass({
    render: function() {
        var posts = this.props.data.map(function(post,i){
            return (
                <Post post={post} key={i}/>
            );
        });
        return (
            <div className="post-list">
                {posts}
            </div>
        )
    }
});

var getStateFromStores = function() {
    return {
        posts: PostStore.getPosts(),
    }
};

var Index = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },
    loadPostsFromServer: function() {
        PostActionCreators.getPosts();
    },
    loadData: function() {
        var totalHeight = 0;
        totalHeight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

        if ($(document).height() <= totalHeight) {
            console.log('bottom');       
        }
    },
    componentDidMount: function() {
        this.loadPostsFromServer();
        // window.addEventListener('scroll',this.loadData);
        PostStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        // window.removeEventListener('scroll', this.loadData);
        PostStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <PostList data={this.state.posts} />
        )
    },
    _onChange: function() { 
        this.setState(getStateFromStores());
    }
});


module.exports = Index;