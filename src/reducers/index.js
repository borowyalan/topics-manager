import { AUTH_LOGIN_REQUEST_SUCCESS, LOGOUT } from '../actions/action_types';

const reducer = (state = {}, action) => {
    switch (action.type) {
    case AUTH_LOGIN_REQUEST_SUCCESS:
        return Object.assign({}, state, { loggedUser: true });
    case LOGOUT:
        return Object.assign({}, state, { loggedUser: false });
    default:
        return state;
    }
};

export default reducer;
