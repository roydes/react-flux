import dispatcher from '../AppDispacher.js';
import globals from '../AppGlobals.js';

const userActions = globals.actionTypes.user;

export function loadUsers() {
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