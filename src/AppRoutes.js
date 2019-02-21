import React, { Component } from 'react'
import UserPage from './pages/UsersPage.jsx'
import { Route } from 'react-router-dom'

export default class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route path="/users" component={UserPage}>
        </Route>
        <Route path="/post" component={UserPage}>
        </Route>
      </div>
    )
  }
}

