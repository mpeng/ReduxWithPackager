/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

import { App } from './app';

export default class RNRedux extends Component {
  render() {
    return (
      
      <View style={styles.container}>
           <Image
              source={
                __DEV__
                  ? require('./assets/images/robot-dev.png')
                  : require('./assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
        <TextInput
          style={styles.input}
          placeholder="Name"
        />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
		  Welcome to Michael's third 5 Android Native App !
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ffffff',
    height: 55,
    width: 100,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  }
});

AppRegistry.registerComponent('RNRedux', () => RNRedux);
