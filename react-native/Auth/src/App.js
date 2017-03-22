import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB45Oql3bN5EIDnRzt_krWMcjQWB-SgQY4",
            authDomain: "auth-b2fce.firebaseapp.com",
            databaseURL: "https://auth-b2fce.firebaseio.com",
            storageBucket: "auth-b2fce.appspot.com",
            messagingSenderId: "716119981017"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    }
};