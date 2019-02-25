import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import UsersPage from './pages/User/UsersPage.jsx'
import HomePage from './pages/HomePage'
export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/users" component={UsersPage}>
        </Route>
        <Route path="/post" component={UsersPage}>
        </Route>
      </div>
    )
  }
}

