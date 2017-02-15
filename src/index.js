import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import rootReducer from './reducers';
import firebase from 'firebase';

import { CONSTANTS } from './constants';

import App from './components/app';
import Login from './components/account/login';

const store = createStore(rootReducer, applyMiddleware(thunk));

const config = {
    apiKey: "AIzaSyAxpV7_5DV2qd7fgnItDlasZVm4SnPbZR0",
    authDomain: "comment-e8a4b.firebaseapp.com",
    databaseURL: "https://comment-e8a4b.firebaseio.com",
    storageBucket: "comment-e8a4b.appspot.com",
    messagingSenderId: "219462519977"
};
firebase.initializeApp(config);

const requireAuthentication = (nextState, replace, callback) => {
    const {userName} = store.getState().reducers;
    if (userName.length == 0) {
        replace(CONSTANTS.ROUTES.LOGIN);
        callback();
    }
    callback();
};
const routes = (
    <Route>
        <Route path={CONSTANTS.ROUTES.HOME} component={App} onEnter={requireAuthentication} />
        <Route path={CONSTANTS.ROUTES.LOGIN} component={Login} />
    </Route>
);

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>
    , document.getElementById("root"));