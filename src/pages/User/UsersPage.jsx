import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UsersList from './UsersList';
import UserDetailPage from './UserDetailPage';
import UserForm from './UserForm';

export default class UsersPage extends Component {
    render() {
       return (
        <div>
            <Route path={this.props.match.url} exact component={UsersList}></Route>
            <Route path={this.props.match.url + '/:id/detail'} component={UserDetailPage}></Route>
            <Route path={this.props.match.url + '/create'} component={UserForm}></Route>
            <Route path={this.props.match.url + '/:id/edit'} component={UserForm}></Route>
        </div>
       );
    }
}
