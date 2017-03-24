
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    componentWillMount() {
        const { employee, employeeUpdate } = this.props;
        _.each(employee, (value, prop) => {
            employeeUpdate({ prop, value });
        });
    }

    _onButtonPress() {
        const { name, phone, shift } = this.props;
        console.log(name, phone, shift);
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
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
