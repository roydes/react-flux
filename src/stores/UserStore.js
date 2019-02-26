import { EventEmitter } from "events";
import globals from '../AppGlobals.js'
import dispatcher from '../AppDispacher.js';

const userActionTypes = globals.actionTypes.user;
const userStoreEvents = globals.storeEvents.user;

class UserStore extends EventEmitter {
  constructor() {
      super();
      this.users = [];
      this.user = null;
  }
  getUsers() {
    return this.users;
  }
  getUser() {
    return this.user;
  }
  onActionDispatched(action) {
    switch(action.type) {
      case userActionTypes.fetch_users_completed: {
        this.users = action.value;
        console.log('Users from dispatcher have arrived to the store', this.users)
        this.emit(userStoreEvents.usersChanged);
        break;
      }
      case userActionTypes.fetch_user_completed: {
        this.user = action.value;
        this.emit(userStoreEvents.selectedUserChanged)
        break;
      }
      case userActionTypes.create_user_completed: {
        this.user = action.value;
        console.log('User from dispatcher has arrived to the store', this.user)
        this.emit(userActionTypes.userCreated);
        break;
      }
    }
  }
}
const userStore = new UserStore();
dispatcher.register(userStore.onActionDispatched.bind(userStore));
export default userStore;