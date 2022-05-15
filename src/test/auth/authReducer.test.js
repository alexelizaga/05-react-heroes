import { authReducer } from '../../auth/authReducer';

import { types } from '../../types/types';


describe('Test authReducer', () => {

  test('should return default state', () => {
    const state = authReducer({ logged: false }, {});
    expect( state ).toEqual({ logged: false });
  });

  test('should login user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Alex',
      }
    };

    const state = authReducer({ logged: false }, action);

    expect( state ).toEqual({
      logged: true,
      name: 'Alex'
    });

  });

  test('should logout user', () => {
    const action = { type: types.logout };

    const state = authReducer({
      logged: true,
      name: 'Alex'
    }, action);

    expect( state ).toEqual({ logged: false });
  });

});
