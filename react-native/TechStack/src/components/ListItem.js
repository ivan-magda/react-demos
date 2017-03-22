
import React, { Component } from 'react';
import { View, Text , TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    _renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { library, selectLibrary } = this.props;
        const { id, title } = library;
        const { containerStyle, titleStyle } = styles;

        return (
            <TouchableWithoutFeedback onPress={() => selectLibrary(id) }>
                <View style={containerStyle}>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this._renderDescription()}
                </View>
            </TouchableWithoutFeedback>
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
