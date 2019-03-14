import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UsersPage from './pages/User/UsersPage';
import HomePage from './pages/HomePage';
import PostsPage from './pages/Posts/PostsPage'

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/users" component={UsersPage}>
        </Route>
        <Route path="/posts" component={PostsPage}>
        </Route>
      </div>
    );
  }
}

