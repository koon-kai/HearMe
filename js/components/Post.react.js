
var React = require('react');
var PostStore = require('../stores/PostStore');
var PostActionCreators = require('../actions/PostActionCreators');


var Post = React.createClass({
    getInitialState: function() {
        return PostStore.getPost();
    },
    loadPostById: function(id) {
        PostActionCreators.getPost(id);
    },
    componentDidMount: function() {
        this.loadPostById(this.props.params.id);
        PostStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        PostStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <div id="post">
                <div className="post-title">
                    <h3>{this.state.data.title}</h3>
                </div>
                <div className="post-content">
                    <span dangerouslySetInnerHTML={{__html: this.state.data.content}} />
                </div>
            </div>
        )
    },
    _onChange: function() { 
        console.log('_onChange');
        this.setState(PostStore.getPost());
    }
});

module.exports = Post;

