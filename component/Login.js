import React, { Component } from 'react';
import { Text,View,Button,Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import styles from '../style/style';
import LogoTitle from './LogoTitle'

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
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
      <View style = {styles.home}>
        <Text>Login Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title  = "Register"
          onPress = {() => {
            this.props.navigation.navigate('Details', {
              itemId: 98,
              otherParam: "Register",
            })
            //this.props.navigation.setParams({otherParma: 'Updated@'})
          }}
        />
      </View>
    );
  }
}
