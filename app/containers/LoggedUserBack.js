import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import Styles from '../styles/LoggedUserBack';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        userInfo: store.userAuthReducer.loggedUser.userInfo
    }
})
class LoggedUserBack extends Component {
    render() {
        const { userInfo = {} } = this.props
        return (
            <ImageBackground style={[Styles.imageStyle]} source={userInfo.backPic}>

            </ImageBackground>
        );
    }
}

export default LoggedUserBack;