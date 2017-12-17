import React, { Component } from 'react';
import CommonText from '../components/CommonText';
import { View, Image, TouchableOpacity } from 'react-native';
import Styles from '../styles/UserHeader';

class UserHeader extends Component {


    _onPress = (id) => {
        if (this.props.onPress) {
            this.props.onPress(id)
        }
    }

    render() {
        const { user = {} } = this.props
        return (
            <TouchableOpacity onPress={() => { this._onPress(user.uuid) }}>
                <View style={[Styles.view]}>
                    <Image
                        source={user.userInfo.headPic}
                        resizeMode='cover'
                        style={[Styles.imageStyle, this.props.imageStyle]}></Image>
                    <CommonText
                        numberOfLines={1}
                        style={[Styles.titleStyle, this.props.titleStyle]}>{user.userInfo.nickName}</CommonText>
                </View>
            </TouchableOpacity>

        );
    }
}

export default UserHeader;