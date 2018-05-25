import React from 'react';
import authReducer from '../index';

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(authReducer(undefined, {})).toEqual({loggedUser: false});
    });
    
});
