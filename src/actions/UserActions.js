import dispatcher from '../AppDispacher.js';
import globals from '../AppGlobals.js';

const userActions = globals.actionTypes.user;

export function fetchUsers() {
    console.log('A '+userActions.fetch_users+' action have been invoke from a component and sent to the dispatcher')
    dispatcher.dispatch({
        type: userActions.fetch_users,
        value: true
    });
    fetch(globals.apiUrl + globals.endpoints.users)
    .then(response => response.json())
    .then((users) => {
        console.log('A '+userActions.fetch_users_completed+' action have been sent  to the dispatcher')
        dispatcher.dispatch({
            type: userActions.fetch_users_completed,
            value: users
        });
    });
}

export function fetchUser(id) {
    dispatcher.dispatch({
        type: userActions.fetch_user,
        value: id
    });
    fetch(globals.apiUrl + globals.endpoints.users + '/'+ id)
    .then(response => response.json())
    .then((user) => {
        dispatcher.dispatch({
            type: userActions.fetch_user_completed,
            value: user
        })
    });
}

export function createUser(user) {
    dispatcher.dispatch({
        type: userActions.create_user,
        value: user
    });
    fetch(globals.apiUrl + globals.endpoints.users, {
        method: 'post',
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then((user) => {
        console.log('Request succeeded with JSON response', user);
        dispatcher.dispatch({
            type: userActions.create_user_completed,
            value: user
        });
      })
      .catch((error) =>{
        console.log('Request failed', error);
      });
}