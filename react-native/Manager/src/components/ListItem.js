
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

export default class ListItem extends Component {
    _onRowPress() {
        const { employee } = this.props;
        Actions.employeeEdit({ employee });
    }

    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this._onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 16
    }
};
