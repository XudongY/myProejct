import React, { Component } from 'react';
import { Text,View,Button} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import styles from '../style/style';


export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    const {params} = navigation.state;

    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: navigation.getParam('otherParam', 'Register'),
      //title :  params.otherParam,
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  render() {
    return (
      <View style={styles.detail}>
        <Text>Details Screen</Text>
        <Text>itemId:{JSON.stringify(this.props.navigation.getParam('itemId','no-id'))}</Text>
        <Text>other Param: {JSON.stringify(this.props.navigation.getParam('otherParma', 'ddddd'))}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details',{
            itemId: Math.floor(Math.random() * 100),
          })}
        />
        <Button
         title="Update the title"
         onPress={() =>
           this.props.navigation.setParams({ otherParam: 'Updated!' })}
       />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
