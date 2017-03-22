import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from  './common';

export default class LoginForm extends Component {
    state = { email: '', password: '', error: '', isLoading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', isLoading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({ email: '', password: '', error: '', isLoading: false });
    }

    onLoginFailed() {
        this.setState({ error: 'Authentication error', isLoading: false });
    }

    renderButton() {
        if (this.state.isLoading) {
            return <Spinner size="small" />
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log In
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="Email"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
