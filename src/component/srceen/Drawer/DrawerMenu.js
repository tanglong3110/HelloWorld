import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default class DrawerMenu extends Component {
    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        // console.log(`this.props.navigation of DrawerMenu ${JSON.stringify(this.props.navigation.state)}`)
        return (
            <ScrollView>
                <View style={{ height: 150, position: 'relative', backgroundColor: '#41C2F8' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            bottom: 15,
                            alignItems: 'center',
                            paddingHorizontal: 24,
                        }}>
                        <Image
                            source={{ uri: 'https://i.imgur.com/OSmU19q.jpg' }}
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 70 / 2,
                                marginRight: 15,
                            }}
                        />
                        <View>
                            <Text style={styles.sideName}>Hi, Long</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.screenContainer}>

                    <TouchableOpacity
                        onPress={this.navigateToScreen('HomeSrceen')}
                        style={styles.itemStyle}>
                        <Text style={styles.screenTextStyle}>Home</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.navigateToScreen('InfoSrceen')}
                        style={styles.itemStyle}>
                        <Text style={styles.screenTextStyle}>Info</Text>
                    </TouchableOpacity>

                   
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    sideName: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 5,
    },
    screenContainer: {
        paddingTop: 10,
        width: '100%',
    },
    itemStyle: {
        flexDirection: 'row',
        paddingLeft: 28,
        marginVertical: 5,
        paddingVertical: 5,
        alignItems: 'center'
    },
    iconStyle: {
        height: 25,
        width: 25,
        marginRight: 15,
    },
    screenTextStyle: {
        fontSize: 16,
        color: '#000',
    },
});

