'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import history from './utils/history';
import NotFoundPage from './components/NotFoundPage.react';
import SignIn from './components/admin/SignIn.react';


var Admin = React.createClass({
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

const routes = (
  <Route component={Admin}>
    <Route path="/signin" component={SignIn} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

ReactDOM.render(
  <Router history={history}>{routes}</Router>, document.getElementById('admin')
);
