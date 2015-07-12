
var React = require('react');
var Router = require('react-router');
// var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Header = require('./Header.react');

var HearMeApp = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <RouteHandler />
            </div>
        )
    }
});


module.exports = HearMeApp;