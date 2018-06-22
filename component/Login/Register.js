/**
 * @flow
 */
import type {NavigationScreenProp} from 'react-navigation';

import styles from '../../style/style';
import React, { Component } from 'react';
import { Button,Text,View} from 'react-native';

type Props = {
  navigation: NavigationScreenProp<State>
}
type State = {}

export default class DetailsScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation, navigationOptions }:any) => {
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
          onPress={() =>  {
            const push =  this.props.navigation.push;
            push && push('Details',{
               itemId: Math.floor(Math.random() * 100),
            });
         }
        }
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
