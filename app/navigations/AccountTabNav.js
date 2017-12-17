import { TabNavigator, TabBarBottom } from 'react-navigation'
import React from 'react';
import { View } from 'react-native';
import AppHeader from '../components/AppHeader';
import Screens from '../screens';
import ActivityNav from './ActivityStackNav';


const PrimaryNav = TabNavigator(
    {
        Mobile: {
            screen: Screens.AccountMobile,

        },
        SMSCode: {
            screen: Screens.AccountSMSCode,
        },
        Password: {
            screen: Screens.AccountPassword,
        },

    },
    {
        lazy: true,
        initialRouteName: 'Mobile',
        tabBarComponent: () => null,
        swipeEnabled: false,

    })

export default PrimaryNav