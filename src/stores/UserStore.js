import { EventEmitter } from "events";
import globals from '../AppGlobals.js'
import dispatcher from '../AppDispacher.js';

const userActionTypes = globals.actionTypes.user;
const userStoreEvents = globals.storeEvents.user;

class UserStore extends EventEmitter {
  constructor() {
      super();
      this.users = [];
  }
  getUsers() {
    return this.users;
  }
  onActionDispatched(action) {
    switch(action.type) {
      case userActionTypes.fetch_users_completed: {
        this.users = action.value;
        console.log('Users from dispatcher have arrivied to the store', this.users)
        this.emit(userStoreEvents.usersChanged);
        break;
      }
    }
  }
}
const userStore = new UserStore();
dispatcher.register(userStore.onActionDispatched.bind(userStore));
export default userStore;