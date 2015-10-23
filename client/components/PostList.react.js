
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import tools from '../utils/tools';


class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <section className="post">
        <div className="post-title">
          <Link to={`/posts/${post._id}`} >{post.title}</Link>
        </div>
        <div className="post-date">
          {tools.formatToDate(post.createAt)}
        </div>
      </section>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};


class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="post-list">
        {posts.map(post =>
          <PostItem post={post} key={post._id} />
        )}
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};


export default PostList;
