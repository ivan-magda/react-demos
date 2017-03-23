
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        const { name, phone, shift, employeeUpdate } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={value => employeeUpdate({ prop: 'name', value })}
                        //onChangeText={text => employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={phone}
                        onChangeText={value => employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
