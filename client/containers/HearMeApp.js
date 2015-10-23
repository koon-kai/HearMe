
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.react';

class HearMeApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

HearMeApp.propTypes = {
  children: PropTypes.node,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HearMeApp);
