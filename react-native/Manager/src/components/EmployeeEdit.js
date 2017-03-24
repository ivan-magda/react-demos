
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        const { employee, employeeUpdate } = this.props;
        _.each(employee, (value, prop) => {
            employeeUpdate({ prop, value });
        });
    }

    _onButtonPress() {
        const { name, phone, shift, employeeSave } = this.props;
        employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    _onTextPress() {
        const { phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift if on ${shift}`);
    }

    _onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid })
    }

    _onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this._onButtonPress.bind(this)}>
                        Update
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this._onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this._onAccept.bind(this)}
                    onDecline={this._onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
