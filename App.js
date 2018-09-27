/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Anasayfa'} />
        <Liste />
      </View>
    );
  }
}
