import React, { Component } from 'react'
import { View } from 'react-native'
import {Header, Card} from '../../../common/index'
import DrawerHeader from '../DrawerHeader'

export default class InfoSrceen extends Component {
    render() {
        return (
          <View style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <DrawerHeader {...this.props} />
            <Header headerText="InfoSrceen"></Header>
          </View>
        );
    }
}
