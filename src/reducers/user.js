import * as types from '../config/constants';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.USER_LOADED_SUCCESS:
      return Object.assign({}, state, action.user);
    case types.PROVIDER_LOGIN_SUCCESS:
      return Object.assign({}, state, action.token);
    case types.AUTH_LOGGED_OUT_SUCCESS:
      return initialState.user;
    default:
      return state;
  }
}
