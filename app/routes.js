
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

//custom react component
var HearMeApp = require('./components/HearMeApp.react');
var Index = require('./components/Index.react');
var Post = require('./components/Post.react');
var AddPost = require('./components/AddPost.react');
var NotFoundPage = require('./components/NotFoundPage.react');

var routes = (
    <Route handler={HearMeApp}>
        <DefaultRoute handler={Index} />
        <Route name="index" path="/" handler={Index} />
        <Route name="addPost" path="/post/add" handler={AddPost} />
        <Route name="post" path="/post/:id" handler={Post} />
        <Route name="404" handler={NotFoundPage} />

        <NotFoundRoute handler={NotFoundPage} />
    </Route>
);


module.exports = routes;