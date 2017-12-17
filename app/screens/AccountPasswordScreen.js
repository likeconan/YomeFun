import React, { Component } from 'react';
import { View, Image } from 'react-native';
import CommonText from '../components/CommonText';
import AccountPasswordForm from '../containers/AccountPasswordForm';
import Styles from '../styles/AccountMobileForm';
import Images from '../styles/Images';

class AccountPasswordScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[Styles.infoCon]}>
                    <Image style={[Styles.imageStyle]} source={Images.fun} resizeMode='contain' />
                    <CommonText style={[Styles.title]}>范，彰显自我</CommonText>
                    <CommonText style={[Styles.description]}>每个人都有自己的范儿，都是生活里的大明星...</CommonText>
                </View>
                <AccountPasswordForm navigation={this.props.navigation} />
            </View >


        );
    }
}

export default AccountPasswordScreen;    