import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Styles from '../styles/AppHeader';
import KeyboardLeftIcon from '../icons/KeyboardLeftIcon';
import KeyboardRightIcon from '../icons/KeyboardRightIcon';
import CommonText from '../components/CommonText';
import LoggedUserHeader from '../containers/LoggedUserHeader';
import NavigationHelper from '../utilities/navigation.helper';

class AppHeader extends Component {


    _openDrawer = () => {
        this.props.navigation.navigate('DrawerOpen')
    }

    render() {
        const { navigation, title, left } = this.props
        return (
            <View style={[Styles.view]}>
                <View style={[Styles.navigationView]}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        {
                            left ?
                                <KeyboardLeftIcon color='white' height={32} width={32} />
                                :
                                <KeyboardRightIcon color='white' height={32} width={32} />
                        }
                    </TouchableOpacity>
                </View>
                <CommonText style={[Styles.title]}>{title}</CommonText>
                <LoggedUserHeader style={[Styles.profileHeader]} onPress={this._openDrawer} />
            </View>
        );
    }
}

export default AppHeader;