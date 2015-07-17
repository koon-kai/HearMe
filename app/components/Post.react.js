
var React = require('react');
var PostStore = require('../stores/PostStore');
var PostActionCreators = require('../actions/PostActionCreators');
var Router = require('react-router');
var Navigation = Router.Navigation;
import Disqus from 'react-disqus-thread';
import Loading from 'react-loading'



var Post = React.createClass({
    mixins: [Navigation],

    getInitialState: function() {
        return {
            data: PostStore.getPost(),
            isLoading: true,
        };
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
        var id = this.state.data._id == undefined ? '' : this.state.data._id;
        var url = window.location.href;

        var dom = this.state.isLoading ? (<div className="loading"><Loading type="spin" color="#e3e3e3" /></div>) :
            (<article id="post">
                <div className="post-title">
                    <h3>{title}</h3>
                </div>
                <hr/>
                <div className="post-content">
                    <span dangerouslySetInnerHTML={{__html: content}} />
                </div>
                <Disqus
                    shortname="koonkaisite"
                    identifier={id}
                    title={title}
                    url={url}
                    categoryId={id} />
            </article>);
        
        return (
            <article id="post">
                <div className="post-title">
                    <h3>{title}</h3>
                </div>
                <hr/>
                <div className="post-content">
                    <span dangerouslySetInnerHTML={{__html: content}} />
                </div>
                <Disqus
                    shortname="koonkaisite"
                    identifier={id}
                    title={title}
                    url={url}
                    categoryId={id} />
            </article>
        )
    },
    _onChange: function() { 
        // console.log('_onChange');
        var data = PostStore.getPost();
        if (data) {
            this.setState({
                data:data,
                isLoading: false,
            });
        } else {
            this.transitionTo('404');
        }
    }
});

module.exports = Post;


