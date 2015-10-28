'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureAdminStore';

const store = configureStore();

render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('admin')
)


// var Admin = React.createClass({
//   render: function() {
//     return (
//       <div>{this.props.children}</div>
//     );
//   }
// });

// const routes = (
//   <Route component={Admin}>
//     <Route path="/signin" component={SignIn} />
//     <Route path="*" component={NotFoundPage} />
//   </Route>
// );

// ReactDOM.render(
//   <Router history={history}>{routes}</Router>, document.getElementById('admin')
// );




