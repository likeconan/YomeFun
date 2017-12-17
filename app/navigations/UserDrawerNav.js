import { DrawerNavigator } from 'react-navigation'
import Screens from '../screens';
import React from 'react';
import MainTabNav from './MainTabNav';
import NavigationHelper from '../utilities/navigation.helper';

const UserDrawerNav = DrawerNavigator(
    {
        Primary: {
            screen: MainTabNav,
            navigationOptions: {
                drawerLabel: () => null
            }
        },
        Profile: {
            screen: Screens.UserProfileScreen,
            navigationOptions: {
                drawerLabel: '个人信息',
            }
        },
    },
    {
        drawerPosition: 'right',
        initialRouteName: 'Primary'
    }
);


export default UserDrawerNav
