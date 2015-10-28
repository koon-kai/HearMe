

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class AdminPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

AdminPage.propTypes = {
  children: PropTypes.node,
};


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(AdminPage);