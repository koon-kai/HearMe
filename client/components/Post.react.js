'use strict';
import React, { Component, PropTypes } from 'react';
// import PostStore from '../stores/PostStore';
// import PostActionCreators from '../actions/PostActionCreators';
// import { Navigation } from 'react-router';
// import Disqus from 'react-disqus-thread';
// import Loading from 'react-loading';
import tools from '../utils/tools';


class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.post);
    const { post } = this.props;
    const title = post ? post.title : '';
    const content = post ? post.content : '' ;
    // var id = this.state.data._id ? this.state.data._id : null;
    const createAt = post ? post.createAt : '';
    // const url = window.location.href;

    // <Disqus
    //     shortname="koonkaisite"
    //     identifier={id}
    //     url={url}
    //     title={title}
    //     categoryId={id} />
    // var dom = this.state.isLoading ? (<div className="loading"><Loading type="spin" color="#e3e3e3" /></div>) :
    //     (<article id="post">
    //         <div className="post-title">
    //             <span>{title}</span>ou
    //         </div>
    //         <div className="post-date">
    //             {createAt}
    //         </div>
    //         <hr/>
    //         <div className="post-content">
    //             <span dangerouslySetInnerHTML={{__html: content}} />
    //         </div>
    //     </article>);
    
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
        </article>
    )
  }

}

Post.propsTypes = {
  post: PropTypes.object.isRequired
}


export default Post;




