

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderMui from '../../components/admin/Header.mui.js';
import EditBox from '../../components/admin/EditBox';

class AdminPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <HeaderMui/>
        {children}
        <EditBox/>
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