import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'

export default class DrawerHeader extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <TouchableHighlight
                    underlayColor='white'
                    style={{ marginLeft: 10, paddingVertical: 10 }}
                    onPress={() => {
                        this.props.navigation.openDrawer()
                    }}>
                    <Image
                        style={{ width: 32, height: 32 }}
                        source={require('../../../image/icons8-menu-52.png')}></Image>
                </TouchableHighlight>
            </View>
        )
    }
}