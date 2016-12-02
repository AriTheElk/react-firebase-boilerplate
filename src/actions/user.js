import firebaseApi from '../api/firebase';
import * as types from '../config/constants';

import { authLoggedIn } from './auth';
import { ajaxCallError, beginAjaxCall } from './ajaxStatus';

function extractUserProperties(firebaseUser) {

  const user = {};
  const userProperties = [
    'displayName',
    'email',
    'emailVerified',
    'isAnonymous',
    'photoURL',
    'providerData',
    'providerId',
    'refreshToken',
    'uid',
  ];

  userProperties.map((prop) => {
    if (prop in firebaseUser) {
      user[prop] = firebaseUser[prop];
    }
  });

  return user;
}

export function userCreated(user) {
  return (dispatch) => {
    firebaseApi.databaseSet('/users/' + user.uid, extractUserProperties(user))
      .then(
        () => {
          dispatch(authLoggedIn(user.uid));
          dispatch(userCreatedSuccess());
        })
      .catch(
        error => {
          dispatch(ajaxCallError(error));
          // @TODO better error handling
          throw(error);
        });
  };
}

export function userCreatedSuccess() {
  return {
    type: types.USER_CREATED_SUCCESS
  };
}

export function providerLoginSuccess(credential) {
  return {
    type: types.PROVIDER_LOGIN_SUCCESS, credential
  };
}

export function userLoadedSuccess(user) {
  return {
    type: types.USER_LOADED_SUCCESS, user: extractUserProperties(user)
  };
}
