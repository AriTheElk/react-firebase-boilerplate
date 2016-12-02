import firebase from 'firebase';
import { push } from 'react-router-redux';

import firebaseApi from '../api/firebase';
import * as types from '../config/constants';
import { ajaxCallError, beginAjaxCall } from './ajaxStatus';
import { notify } from './notifications';
import { providerLoginSuccess, userLoadedSuccess, userCreated } from './user';

export function authInitializedDone() {
  return {
    type: types.AUTH_INITIALIZATION_DONE
  };
}

export function authLoggedInSuccess(userUID) {
  return {
    type: types.AUTH_LOGGED_IN_SUCCESS, userUID
  };
}

export function authLoggedOutSuccess() {
  return { type: types.AUTH_LOGGED_OUT_SUCCESS };
}

export function authInitialized(user) {
  return (dispatch) => {
    dispatch(authInitializedDone());
    if (user) {
      dispatch(authLoggedIn(user.uid));
    } else {
      dispatch(authLoggedOutSuccess());
    }
  };
}

/**
 * Determines whether or not the user has a valid
 * GitHub authentication token.
 * 
 * @export
 * @returns (dispatch) => {}
 */
export function hasGithubToken() {
  // if we have a stored token, return it; else return null.
  return localStorage.token ? localStorage.token : null;
}


/**
 * Determines whether or not a user is authenticated.
 * 
 * @export
 * @returns (dispatch) => {}
 */
export function authLoggedIn() {
  // fetch a copy of the currently logged in user
  const user = firebase.auth().currentUser;
  return (dispatch) => {
    // a github account is required to use the site,
    // so confirm the user has an access token.
    const token = hasGithubToken();
    if (token) {
      dispatch(providerLoginSuccess(token));
      dispatch(authLoggedInSuccess(user.uid));
      dispatch(beginAjaxCall());
      dispatch(userLoadedSuccess(user));
      dispatch(push('/'));
    }
  };
}

export function signInWithGitHub() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return firebaseApi.signInWithGitHub()
    .then(
      result => {
        localStorage.setItem("token", result.credential.accessToken);
        dispatch(notify(`Welcome ${result.user.displayName}`));
        dispatch(authLoggedIn());
        return;
      })
    .catch(error => {
      dispatch(ajaxCallError(error));
      // @TODO better error handling
      throw (error);
    });
  };
}

export function signOut() {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return firebaseApi.authSignOut()
      .then(
        () => {
          localStorage.token = null;
          dispatch(notify(`Logged out.`));
          dispatch(authLoggedOutSuccess());
          if (getState().routesPermissions.requireAuth
            .filter(route => route === getState().routing.locationBeforeTransitions.pathname).toString()) {
            dispatch(push('/'));
          }
        })
      .catch(error => {
        dispatch(ajaxCallError(error));
        // @TODO better error handling
        throw (error);
      });
  };
}


function redirect(replace, pathname, nextPathName, error = false) {
  replace({
    pathname: pathname,
    state: { nextPathname: nextPathName }
  });
  if (error) {
    // toastr.error(error);
  }
}

export function requireAuth(nextState, replace) {
  return (dispatch, getState) => {
    if (!getState().auth.isLogged) {
      redirect(replace, '/login', nextState.location.pathname, 'You need to be logged to access this page');
    }
  };
}
