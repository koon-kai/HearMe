
var React = require('react');
var PostStore = require('../stores/PostStore');
var PostActionCreators = require('../actions/PostActionCreators');
var Router = require('react-router');
var Navigation = Router.Navigation;

var Post = React.createClass({
    mixins: [Navigation],

    getInitialState: function() {
        return {data: PostStore.getPost()};
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
        var title = this.state.data.title == undefined ? '' : this.state.data.title ;
        var content = this.state.data.content == undefined ? '' : this.state.data.content ;

        return (
            <article id="post">
                <div className="post-title">
                    <h3>{title}</h3>
                </div>
                <div className="post-content">
                    <span dangerouslySetInnerHTML={{__html: content}} />
                </div>
            </article>
        )
    },
    _onChange: function() { 
        // console.log('_onChange');
        var data = PostStore.getPost();
        if (data) {
            this.setState({data:data});
        } else {
            this.transitionTo('404');
        }
    }
});

module.exports = Post;

