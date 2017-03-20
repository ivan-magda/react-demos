import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
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
            <View>
                <Header title="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;
