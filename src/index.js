// modules
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// api
import FirebaseApi from './api/firebase';

// actions
import { authInitialized } from './actions/auth';
import { ajaxCallError, beginAjaxCall } from './actions/ajaxStatus';

// components
import App from './containers/App';

// Store
import initialState from './reducers/initialState';
import configureStore from './store/configure'; //eslint-disable-line import/default

// Styles
import global from './styles/global';

// store initialization
export const store = configureStore(initialState);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');

// Initialize Firebase Auth and then start the app
store.dispatch(beginAjaxCall());
FirebaseApi.initAuth()
  .then(
    user => {
      store.dispatch(authInitialized(user));

      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <App history={history} store={store}/>
          </Provider>
        </AppContainer>,
        rootEl
      );

      if (module.hot) {
        module.hot.accept('./containers/App', () => {
          // If you use Webpack 2 in ES modules mode, you can
          // use <App /> here rather than require() a <NextApp />.
          const NextApp = require('./containers/App').default;
          ReactDOM.render(
            <AppContainer>
              <Provider store={store}>
                <NextApp history={history} store={store}/>
              </Provider>
            </AppContainer>,
            rootEl
          );
        });
      }
    })
  .catch(
    error => {
      store.dispatch(ajaxCallError());
      console.error('error while initializing Firebase Auth'); // eslint-disable-line no-console
      console.error(error); // eslint-disable-line no-console
    });
