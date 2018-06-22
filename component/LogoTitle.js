/**
 * @flow strict
 */

import React from 'react';
import  {Image} from 'react-native';
import logo from '../resources/yuxudong.png'


export default class LogoTitle extends  React.Component<{}> {
  render() {
    return (
      <Image
        source= {logo}
        style = {{width: 30, height: 30}}
      />
    );
  }
}
