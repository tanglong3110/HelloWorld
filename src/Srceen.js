import {Dimensions} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import LoginSrceen from './component/srceen/LoginSrceen';
import RegisterSrceen from './component/srceen/RegisterSrceen';

//Drawer
import HomeSrceen from './component/srceen/Drawer/DrawerSrceen/HomeSrceen';
import InfoSrceen from './component/srceen/Drawer/DrawerSrceen/InfoSrceen';

//DrawerMenu
import DrawerMenu from './component/srceen/Drawer/DrawerMenu';

const {width} = Dimensions.get('window');

const DrawerNav = createDrawerNavigator(
  {
    HomeSrceen: HomeSrceen,
    InfoSrceen: InfoSrceen,
  },
  {
    contentComponent: DrawerMenu,
    drawerWidth: width / 2,
    drawerType: 'slide',
  },
);

const StackNav = createSwitchNavigator({
  loginSrceen: LoginSrceen,
  DrawerHome: DrawerNav,
  RegisterSrceen: RegisterSrceen,
});

const Srceen = createAppContainer(StackNav);
export default Srceen;
