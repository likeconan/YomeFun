import { TabNavigator, TabBarBottom } from 'react-navigation'
import React from 'react';
import { View } from 'react-native';
import AppHeader from '../components/AppHeader';
import Screens from '../screens';
import ActivityNav from './ActivityStackNav';


const PrimaryNav = TabNavigator(
    {
        Activity: {
            screen: ActivityNav,
        },
        CelebritySocial: {
            screen: Screens.CelebritySocial,
        },

    },
    {
        tabBarPosition: 'top',
        initialRouteName: 'Activity',
        lazy: true,
        tabBarComponent: ({ navigation }) => {
            const titles = ['活动', '明星圈']
            const _onPress = () => {
                navigation.navigate(navigation.state.index ? 'Activity' : 'CelebritySocial')
            }
            return (
                <AppHeader
                    navigation={navigation}
                    onPress={_onPress}
                    left={!!navigation.state.index}
                    title={titles[navigation.state.index]} />
            )

        },
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: 'transparent'
            },
            style: {
                backgroundColor: 'transparent',
            },
            showIcon: false
        },

    })

export default PrimaryNav