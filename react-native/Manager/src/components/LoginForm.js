
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    _onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        const { email } = this.props;

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
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
