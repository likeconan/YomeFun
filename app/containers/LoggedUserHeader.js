import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Styles from '../styles/LoggedUserHeader'
import { connect } from 'react-redux';

@connect((store) => {
    return {
        userInfo: store.userAuthReducer.loggedUser.userInfo
    }
})
class LoggedUserHeader extends Component {
    render() {
        const { userInfo = {} } = this.props

        return (
            <View style={[Styles.view, this.props.style]}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image
                        style={[Styles.imageStyle]}
                        resizeMode='cover'
                        source={userInfo.headPic} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoggedUserHeader;