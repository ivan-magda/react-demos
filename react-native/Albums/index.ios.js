// Import a library to help create a component.
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Header from './src/components/header';

// Create a component.
class App extends Component {
  render() {
    return (
      <Header title='Albums' />
    );
  }
}

// Render it to the device.
AppRegistry.registerComponent('Albums', () => App);
