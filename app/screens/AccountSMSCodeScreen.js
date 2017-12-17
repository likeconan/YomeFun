import React, { Component } from 'react';
import { View, Image } from 'react-native';
import CommonText from '../components/CommonText';
import AccountSMSCodeForm from '../containers/AccountSMSCodeForm';
import Styles from '../styles/AccountMobileForm';
import Images from '../styles/Images';

class AccountSMSCodeScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[Styles.infoCon]}>
                    <Image style={[Styles.imageStyle]} source={Images.me} resizeMode='contain' />
                    <CommonText style={[Styles.title]}>觅，知己知音</CommonText>
                    <CommonText style={[Styles.description]}>在这里，面对面接触去寻找你志同道合的朋友...</CommonText>
                </View>
                <AccountSMSCodeForm navigation={this.props.navigation} />
            </View >


        );
    }
}

export default AccountSMSCodeScreen;    