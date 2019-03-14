import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PostsListPage from './PostsListPage'
import PostDetailPage from './PostDetailPage'

export default class PostsPage extends Component {
  render() {
    const url = this.props.match.url;  
    return (
      <div>
        <Route path={url} exact component = {PostsListPage}></Route>
        <Route path={url+'/'+ this.id} component={PostDetailPage}></Route>
      </div>
    )
  }
}
