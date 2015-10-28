'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
//custom react component
import HearMeApp from './containers/HearMeApp';
import IndexPage from './containers/IndexPage';
import PostPage from './containers/PostPage';
import AddPost from './components/AddPost.react';
import NotFoundPage from './components/NotFoundPage.react';
import ChatPage from './containers/ChatPage';


const routes = (
  <Route path="/" component={HearMeApp}>
    <IndexRoute component={IndexPage} />
    <Route path="/posts/:id" component={PostPage} />
    <Route path="/posts" component={AddPost} />
    <Route path="/chat" component={ChatPage} />
    <Route path="404" component={NotFoundPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
