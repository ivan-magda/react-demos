
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { CardSection } from './common';

export default class ListItem extends Component {
    render() {
        const { library } = this.props;
        const { containerStyle, titleStyle } = styles;

        return (
            <View style={containerStyle}>
                <CardSection>
                    <Text style={titleStyle}>
                        {library.title}
                    </Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        minHeight: 44,
    },
    titleStyle: {
        fontSize: 16,
        paddingLeft: 8
    }
};
