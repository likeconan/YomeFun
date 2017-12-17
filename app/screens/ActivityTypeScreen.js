import React, { Component } from 'react';
import { View } from 'react-native';
import ActivityTypeList from '../containers/ActivityTypeList';
import { userAuth } from '../actions/user.auth.action';
import store from '../store';

class ActivityListScreen extends Component {



    componentWillMount() {
        store.dispatch(userAuth())
    }


    render() {
        const { navigation } = this.props;
        console.log(navigation,'ActivityList')
        return (
            <View style={{ flex: 1 }}>
                <ActivityTypeList navigation={navigation} />
            </View>
        )
    }
}

export default ActivityListScreen;