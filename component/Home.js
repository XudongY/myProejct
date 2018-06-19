import React, { Component } from 'react';
import { Image, Text,View,Button,Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import styles from '../style/style';
import LogoTitle from './LogoTitle'
import logo from '../sources/yuxudong.png'

export default class Home extends  React.Component {

  static navigationOptions = ({ navigation }) => {
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
  componentWillMount() {
    this.props.navigation.setParams({increaseCount: this._increseCount});
  }
  state = {
    count: 0,
  }
  _increseCount = () => {
    this.setState({count: this.state.count + 1});
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
