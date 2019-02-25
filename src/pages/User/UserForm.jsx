import React, { Component } from 'react';
import * as UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import globals from '../../AppGlobals.js';

const userStoreEvents = globals.storeEvents.user;

export default class UserForm extends Component {
  constructor(props) {
      super(props);
      this.state = {user: {
          name: '',
          email: '',
          phone: '',
          website: '',
      }};
      this.id = props.match.params.id;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
      if(this.id) {
          UserActions.fetchUser(this.id);
          UserStore.on(userStoreEvents.selectedUserChanged, ()=> {
              this.setState({user: UserStore.getUser()})
          });


      }
  }

  render() {
      console.log(this.state.user)
    const submitText = this.id ? 'Edit' : 'Create';  
    return (
      <form className="user-form container" onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="form-group col-xs-12 col-md-6">
                <label>Name</label>
                <input className="form-control" type="text" id="name" placeholder="John Doe" value={this.state.user.name} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-xs-12 col-md-6">
                <label>Email</label>
                <input className="form-control" type="email" id="email" placeholder="john@email.com" value={this.state.user.email} onChange={this.handleChange}/>
            </div>
        </div>
        <div className="row">    
            <div className="form-group col-xs-12 col-md-6">
                <label>Phone</label>
                <input className="form-control" type="text" id="phone" placeholder="+52 1 33 444 5555" value={this.state.user.phone} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-xs-12 col-md-6">
                <label>Website</label>
                <input className="form-control" type="text" id="website" placeholder="johndoe.org" value={this.state.user.website} onChange={this.handleChange}/>
            </div> 
        </div>
        <button className="btn btn-secondary w-50 my-5" type="submit">{submitText}</button>
      </form>
    )
  }

  handleChange(event) {
    console.log(event.target)
    const changedUser = this.state.user
    changedUser[event.target.id] =  event.target.value;
    this.setState({user: changedUser});
  }
  handleSubmit(event) {
      event.preventDefault();
      if (this.id) {
        console.log('Saving ....', this.state.user)
      } else {
        console.log('Updating ....', this.state.user)
      }
  }
}
