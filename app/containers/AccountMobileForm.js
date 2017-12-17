import React, { Component } from 'react';
import { View, Button } from 'react-native';
import FormTextField from '../components/FormTextField';
import CommonText from '../components/CommonText';
import PlainTextButton from '../components/PlainTextButton';
import Styles from '../styles/AccountMobileForm';
import Colors from '../styles/Colors';
import { editMobile, checkUserExist, getSMSCode } from '../actions/user.login.action';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        mobile: store.userLoginReducer.mobile,
    }
})
class AccountMobileForm extends Component {

    _getSMSCode = () => {
        checkUserExist(this.props.mobile.value)
            .then((data) => {
                if (data.ifnew) {
                    return getSMSCode(data.mobile)
                } else {
                    this.props.navigation.navigate('Password')
                }
            }).then((res) => {
                if (res) {
                    this.props.dispatch(res)
                    this.props.navigation.navigate('SMSCode', { route: 'Password' })
                }
            })

    }

    render() {

        const { mobile } = this.props

        return (
            <View style={[Styles.view]}>
                <View style={[Styles.inputView]}>
                    <FormTextField
                        textInputStyle={Styles.textInput}
                        value={mobile.value}
                        onChangeText={(val) => this.props.dispatch(editMobile(val))}
                        errorText='请输入有效的手机号'
                        validated={mobile.validated}
                        fieldConStyle={Styles.viewStyle}
                        iconConStyle={Styles.iconConStyle}
                        keyboardType='phone-pad'
                        icon={<CommonText style={[Styles.phonePrefix]}>+86</CommonText>} />

                </View>
                <PlainTextButton
                    disable={!mobile.validated}
                    onPress={this._getSMSCode}
                    activeColor={Colors.blueGrey500}
                    title='下一步' />
            </View>
        );
    }
}

export default AccountMobileForm;