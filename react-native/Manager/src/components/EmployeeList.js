
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props.
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({ rowHasChanged: (lhs, rhs) => lhs !== rhs });
        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        console.log(this.props);
        return (
            <View>

            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (value, uid) => {
        return { ...value, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
