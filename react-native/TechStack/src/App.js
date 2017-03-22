
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <Header title="Tech Stack" />
                    <LibraryList />
                </View>
            </Provider>
        );
    }
}
