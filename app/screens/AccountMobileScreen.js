import React, { Component } from 'react';
import { View, Image } from 'react-native';
import CommonText from '../components/CommonText';
import AccountMobileForm from '../containers/AccountMobileForm';
import Styles from '../styles/AccountMobileForm';
import Images from '../styles/Images';


class AccountMobileScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[Styles.infoCon]}>
                    <Image style={[Styles.imageStyle]} source={Images.yo} resizeMode='contain' />
                    <CommonText style={[Styles.title]}>悦，遇你所想</CommonText>
                    <CommonText style={[Styles.description]}>从输入您的手机号获取短信验证码开始...</CommonText>
                </View>
                <AccountMobileForm navigation={this.props.navigation} />
            </View >


        );
    }
}

export default AccountMobileScreen;