import React, { Component } from 'react'
import * as UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import globals from '../../AppGlobals.js';
import { Link } from 'react-router-dom';

const userStoreEvents = globals.storeEvents.user;

export default class UserDetailPage extends Component {
  constructor(props) {
      super(props);
      this.state = {user: null};
  }
  componentDidMount() {
      const userId = this.props.match.params.id; 
      console.log('User ID: ', userId)
      UserActions.fetchUser(userId);
      UserStore.on(userStoreEvents.selectedUserChanged, ()=> {
          this.setState({user: UserStore.getUser()})
          console.log( this.state.user)
      }); 
  }

  render() {
    const user = this.state.user;
    const userAttributes = user? Object.entries(user).map((entrie, index) => {
      const attribute = entrie[0];
      let value = entrie[1];
      switch (attribute) {
        case 'company':
          value = value.name;
          break;
        case 'address':
          value = value.street + ' ' + value.suite + ',' + value.city;
          break;
      }
      return (<div key={index}><span>{attribute}: </span><span>{value}</span></div>);
    }): (<div></div>);
    const editButton = user ? (<Link to={'/users/' + user.id + '/edit'} className="btn btn-secondary w-50 my-5">Edit</Link>): null; 
    return (
      <div className="user-detail container">
        <h2>{user ? user.name: ''}</h2>
        {userAttributes}
        {editButton}
      </div>
    )
  }

  componentWillUnmount() {
    UserStore.removeAllListeners();
  }
}
