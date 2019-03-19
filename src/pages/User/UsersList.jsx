import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as UserActions from '../../actions/UserActions';
import userStore from '../../stores/UserStore';
import globals from '../../AppGlobals.js';

const userStoreEvents = globals.storeEvents.user;

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }
    componentDidMount() {
        UserActions.fetchUsers();
        userStore.on(userStoreEvents.usersChanged, ()=> {
            console.log('getting users from the Store on UserPage component', userStore.getUsers())
            this.setState({users: userStore.getUsers()});
        })
    }
    render() {
        const users = this.state.users;
        const userlistItems = users.map((user) => {
            return (
                <li className="list-item" key={user.id}>
                    <Link to={this.props.match.url + "/" + user.id + "/detail"}>{user.name}</Link>
                </li>);
        });

        return (
            <div className="users">
                <Link to={this.props.match.url + "/create"} className="btn btn-secondary w-50 my-5">Add User</Link>
                <h3 className="title"> List of current users</h3>
                <ul className="user-list">
                    {userlistItems}
                </ul>
            </div>
        );
    }
    componentWillUnmount() {
        userStore.removeAllListeners();
    }
}
