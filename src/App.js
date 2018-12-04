import * as Expo from 'expo';
import React, { Component } from 'react';
import AppContainer from './router';

class App extends Component {    
    render() {
      return (
      <AppContainer />
      );
    }
  }

Expo.registerRootComponent(App);
