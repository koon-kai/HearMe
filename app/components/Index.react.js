
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PostStore = require('../stores/PostStore');
var PostActionCreators = require('../actions/PostActionCreators');
import Loading from 'react-loading'

var Post = React.createClass({
    render: function() {
        return (
            <section className="post">
                <div className="post-title">
                    <Link to="post" params={{id:this.props.data._id}}>{this.props.data.title}</Link>
                </div>
                <div className="post-date">
                    {this.props.data.createAt}
                </div>
            </section>
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
        return { 
            data: PostStore.getPosts(),
        };
    },
    loadPostsFromServer: function() {
        PostActionCreators.getPosts(this.state.page);
    },
    loadData: function() {
        // console.log('load data...');
        var totalHeight = 0;
        totalHeight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

        if ($(document).height() <= totalHeight) {
            console.log('bottom');       
        }
    },
    componentDidMount: function() {
        this.loadPostsFromServer();
        window.addEventListener('scroll',this.loadData);
        PostStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.loadData);
        PostStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <PostList data={this.state.data} />
        )
    },
    _onChange: function() { 
        // console.log('_onChange');
        this.setState({
            data: PostStore.getPosts(),
        });
    }
});


module.exports = Index;