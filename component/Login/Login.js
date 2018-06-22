/**
 * @flow
 */

import React, { Component } from 'react';
import {Text,View,Button,Platform, Form} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import styles from '../../style/style';
import LogoTitle from '../LogoTitle'


export default class Login extends React.Component<{}> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      headerTitle: 'Login',
    };
  };

  render() {
    return (
      <View style = {styles.home}>
        <Text>Login Screen</Text>
        <Button
          title  = "Register"
          onPress = {() => {

            //this.props.navigation.setParams({otherParma: 'Updated@'})
          }}
        />
      </View>
    );
  }
}
