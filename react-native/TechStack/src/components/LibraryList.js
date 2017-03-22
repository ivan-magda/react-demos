
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const { libraries } = this.props;

        const dataSource = new ListView.DataSource({
            rowHasChanged: (lhs, rhs) => lhs !== rhs
        });

        this.dataSource = dataSource.cloneWithRows(libraries);
    }

    _renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this._renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
