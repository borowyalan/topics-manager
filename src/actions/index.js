import { LOGOUT } from '../actions/action_types';
import { AUTH_LOGIN_REQUEST_SUCCESS } from './action_types';
import { push } from 'react-router-redux';

const simulateDelayedDispatch = (dispatch) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch(loggedIn());
            resolve();
        }, 1500);
    });
};


//TODDO get back to state w/o react-router-redux
//fine to use mount()...


export const openLoginPage = () => {
    return (dispatch) => {
        //push(`/projects`);
        //simulateDelayedDispatch(dispatch);
        
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
