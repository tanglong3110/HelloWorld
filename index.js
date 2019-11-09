/**
 * @format
 */
import React from 'react'
import {AppRegistry, View} from 'react-native';
import Srceen from './src/Srceen'
import HomeSrceen from './src/component/srceen/Drawer/DrawerSrceen/HomeSrceen'
import {name as appName} from './app.json';

const App=()=> <Srceen/>
        
    


AppRegistry.registerComponent(appName, () => App);
