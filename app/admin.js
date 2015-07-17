
var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

import NotFoundPage from './components/NotFoundPage.react';
import SignIn from './components/admin/SignIn.react';


var Admin = React.createClass({
    render: function() {
        return (
            <RouteHandler />
        );
    }
});

var routes = (
    <Route handler={Admin}>
     
        <Route name="signin" path="/signin" handler={SignIn} />
        <Route name="404" handler={NotFoundPage} />

        <NotFoundRoute handler={NotFoundPage} />
    </Route>
);


Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(
        <Root />, document.body
    );
});