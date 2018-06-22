/**
 * @flow
 */
import type {NavigationScreenProp, NavigationScreenConfig} from 'react-navigation';

import React, { Component } from 'react';
import { Image, Text,View,Button,Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import styles from '../style/style';
import LogoTitle from './LogoTitle'
import logo from '../resources/yuxudong.png'

export default class Home extends React.Component<{}> {

  static navigationOptions  = ({ navigation } : any)=> {
    return {
      title: 'Back',
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress = {() => {
              navigation.navigate('Login', {
              itemId: 98,
              otherParam: "Register",
            })
            //this.props.navigation.setParams({otherParma: 'Updated@'})
          }}
          title="Login"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
  };
  render() {
    return (
      <Image
        source= {logo}
        style = {{width: 30, height: 30}}
      />
    );
  }
}
