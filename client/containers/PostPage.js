
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post.react';
import { getPost } from '../actions/posts';
const RefreshIndicator = require('material-ui/lib/refresh-indicator');


class PostPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch , id } = this.props;
    console.log('dispatch');
    console.log(id);
    dispatch(getPost(id));
    // getPost();
  }

  render() {
    const { isFetching, post } = this.props;
    return (
      <div>
        {isFetching &&
          <div className="loading">
            <RefreshIndicator size={40} style={{left: '50%', top: '100px', marginLeft: '-20px'}} status="loading" />
          </div>
        }
        {!isFetching &&
          <Post post={post} />
        }
      </div>
    )
  }
}

PostPage.propsTypes = {
  id: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const { id } = state.router.params;
  // console.log(id);
  const { postsReducer: { isFetching, posts }} = state;
  // console.log(posts);
  console.log(isFetching);
  // console.log(id);
  // console.log(state);
  return {
    id,
    post: posts[0],
    isFetching
  }
}


export default connect(mapStateToProps)(PostPage);