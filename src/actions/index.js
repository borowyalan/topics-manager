import { LOGOUT } from '../actions/action_types';
import { AUTH_LOGIN_REQUEST_SUCCESS } from './action_types';

export const openLoginPage = (history) => {
    return function(dispatch) {
        history.push('/projects');
        setTimeout(() => {
            //pretend we were logging in...
            dispatch(loggedIn());
        }, 1500);
    };
};

export const loggedIn = () => {
    return {
        type: AUTH_LOGIN_REQUEST_SUCCESS
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};
