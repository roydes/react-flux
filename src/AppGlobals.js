const globals = {
    apiUrl: 'https://jsonplaceholder.typicode.com/',
    endpoints: {
    users: 'users'
    },
    actionTypes: {
        user: {
            fetch_users: 'FETCH_USERS',
            fetch_users_completed: 'FETCH_USERS_COMPLETED'
        }
    },
    storeEvents: {
        user: {
            usersChanged: 'USERS_CHANGED',
        }
    }
};

export default globals;
