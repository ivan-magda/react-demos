
import React, { Component } from 'react';
import { Text } from 'react-native'
import { CardSection } from './common';

export default class ListItem extends Component {
    render() {
        const { name } = this.props.employee;

        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 16
    }
};
