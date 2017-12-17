import Screens from '../screens';
import { StackNavigator } from 'react-navigation'
import React from 'react';
import NavigationHelper from '../utilities/navigation.helper';
import Lang from '../languages';
import Colors from '../styles/Colors';

const ActivityNav = StackNavigator(
    {
        ActivityTypeHome: {
            screen: Screens.ActivityType,
            navigationOptions: ({ navigation }) => {
                NavigationHelper.toggleSwipeEnable(true)
                return {
                    header: null,
                    gesturesEnabled: true,
                }
            }
        },
        Activities: {
            screen: Screens.Activities,
            navigationOptions: ({ navigation }) => {

                return {
                    header: null,
                    gesturesEnabled: true,
                    tabBarVisible: false,
                }
            }
        }
    },
    {
        initialRouteName: 'ActivityTypeHome',
        headerMode: 'screen'
    }
)

export default ActivityNav