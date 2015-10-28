
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList.react';
import { getPosts } from '../actions/posts';



class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getPosts());
  }

  render() {
    const { isFetching, posts } = this.props;
    // console.log(posts);
    return (
      <div>
        {isFetching &&
          <h4 className="loading">Loading...</h4>
        }
        {!isFetching &&
          <PostList posts={posts} />
        }
      </div>
    )
  }
}


IndexPage.propsTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  // console.log(state);
  const { postsReducer: { isFetching, posts} } = state;
  return {
    posts,
    isFetching,
  }
}

//right?
// function mapDispatchToProps(dispatch) {
//   return {
//     posts: () => dispatch(getPosts())
//   }
// }


export default connect(mapStateToProps)(IndexPage);