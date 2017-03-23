
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    _onEmailChange(text) {
        this.props.emailChanged(text);
    }

    _onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    _onButtonPress() {
        const { email, password, loginUser } = this.props;
        loginUser({ email, password });
    }

    _renderButton() {
        const { loading } = this.props;
        if (loading) {
            return <Spinner size="large" />
        } else {
            return (
                <Button onPress={this._onButtonPress.bind(this)}>
                    Login
                </Button>
            );
        }
    }

    render() {
        const { email, password, error, loading } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this._onEmailChange.bind(this)}
                        value={email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password"
                        placeholder="password"
                        onChangeText={this._onPasswordChanged.bind(this)}
                        value={password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {error}
                </Text>

                <CardSection>
                    {this._renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
