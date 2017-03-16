/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import SearchPage from './SearchPage';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

// AppRegistry defines the entry point to the application and provides the root component.
AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
