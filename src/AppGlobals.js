const globals = {
    apiUrl: 'https://jsonplaceholder.typicode.com/',
    endpoints: {
    users: 'users'
    },
    actionTypes: {
        user: {
            fetch_users: 'FETCH_USERS',
            fetch_users_completed: 'FETCH_USERS_COMPLETED',
            fetch_user: 'FETCH_USER',
            fetch_user_completed: 'FETCH_USER_COMPLETED',
            create_user: 'CREATE_USER',
            create_user_completed: 'CREATE_USER_COMPLETED',
        }
    },
    storeEvents: {
        user: {
            usersChanged: 'USERS_CHANGED',
            selectedUserChanged: 'USERS_CHANGED',
            userCreated: 'USER_CREATED',
        }
    }
};

export default globals;
