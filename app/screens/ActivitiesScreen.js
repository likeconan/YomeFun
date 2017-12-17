import React, { Component } from 'react';
import { View } from 'react-native';
import ActivityShowList from '../containers/ActivityShowList';
import AppHeaderBack from '../components/AppHeaderBack';

class ActivitiesScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <AppHeaderBack navigation={navigation} />
                <ActivityShowList />
            </View>

        )
    }
}

export default ActivitiesScreen;