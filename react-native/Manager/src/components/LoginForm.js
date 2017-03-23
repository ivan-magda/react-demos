
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

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

    render() {
        const { email, password } = this.props;

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

                <CardSection>
                    <Button onPress={this._onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
