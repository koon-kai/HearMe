
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/posts';
import DataTable from '../../components/admin/DataTable';
const RefreshIndicator = require('material-ui/lib/refresh-indicator');


class WorkbenchPage extends Component {
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
          <div className="loading">
            <RefreshIndicator size={40} style={{left: '50%', top: '100px', marginLeft: '-20px'}} status="loading" />
          </div>
        }
        {!isFetching &&
          <DataTable data={posts} />
        }
      </div>
    )
  }
}


WorkbenchPage.propsTypes = {
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

export default connect(mapStateToProps)(WorkbenchPage);