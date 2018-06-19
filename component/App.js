/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text,View,Button} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import styles from '../style/style';
import Register from './Register';
import Login from './Login'
const RootStack = createStackNavigator(
  {
    Home: {
      screen: Login,
    },
    Details: {
      screen: Register,
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class myProject extends React.Component {
  render() {
    return <RootStack />;
  }
}
