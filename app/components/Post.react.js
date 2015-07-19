
import React from 'react';
import PostStore from '../stores/PostStore';
import PostActionCreators from '../actions/PostActionCreators';
import Router from 'react-router';
import Disqus from 'react-disqus-thread';
import Loading from 'react-loading';
import tools from '../utils/tools';

var Navigation = Router.Navigation;

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
        var createAt = this.state.data.createAt == undefined ? '' : this.state.data.createAt;
        var url = window.location.href;

        var dom = this.state.isLoading ? (<div className="loading"><Loading type="spin" color="#e3e3e3" /></div>) :
            (<article id="post">
                <div className="post-title">
                    <span>{title}</span>
                </div>
                <div className="post-date">
                    {createAt}
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
                    <span>{title}</span>
                </div>
                <div className="post-date">
                    {tools.formatToDateTime(createAt)}
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


