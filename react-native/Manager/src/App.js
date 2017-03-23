
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from  './reducers';
import LoginForm from './components/LoginForm';

const store = createStore(
    reducers,
    {},
    applyMiddleware(ReduxThunk)
);

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB45Oql3bN5EIDnRzt_krWMcjQWB-SgQY4",
            authDomain: "auth-b2fce.firebaseapp.com",
            databaseURL: "https://auth-b2fce.firebaseio.com",
            storageBucket: "auth-b2fce.appspot.com",
            messagingSenderId: "716119981017"
        });
    }

    render() {
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}
