
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({ rowHasChanged: (lhs, rhs) => lhs !== rhs });
        this.dataSource = ds.cloneWithRows(employees);
    }

    _renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render() {
        console.log(this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this._renderRow}
            />
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
