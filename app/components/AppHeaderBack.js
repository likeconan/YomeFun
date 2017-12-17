import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader';
import LoggedUserBack from '../containers/LoggedUserBack';
import Lang from '../languages';
import { NavigationActions } from 'react-navigation';

class AppHeaderBack extends Component {

    _back = () => {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={{ height: 150 }}>
                <LoggedUserBack />
                <AppHeader
                    navigation={navigation}
                    onPress={this._back}
                    left={true}
                    title={Lang.instant(navigation.state.params.type)} />
            </View>

        );
    }
}

export default AppHeaderBack;