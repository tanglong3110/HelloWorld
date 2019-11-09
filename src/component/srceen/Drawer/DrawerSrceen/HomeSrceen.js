import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header} from '../../../common/index';
import DrawerHeader from '../DrawerHeader';

export default class HomeSrceen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <DrawerHeader {...this.props} />
        <Header headerText="HemoSrceen" />
      </View>
    );
  }
}
