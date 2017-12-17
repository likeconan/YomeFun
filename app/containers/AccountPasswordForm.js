import React, { Component } from 'react';
import { View } from 'react-native';
import FormTextField from '../components/FormTextField';
import LockIcon from '../icons/LockIcon';
import PlainTextButton from '../components/PlainTextButton';
import Styles from '../styles/AccountMobileForm';
import Colors from '../styles/Colors';
import { userRegister, userLogin, editPassword } from '../actions/user.login.action';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        password: store.userLoginReducer.password,
        ifnew: store.userLoginReducer.ifnew,
        mobile: store.userLoginReducer.mobile
    }
})
class AccountPasswordForm extends Component {

    _onLogin = () => {
        var promise = this.props.ifnew ?
            userRegister({
                mobile: this.props.mobile.value,
                password: this.props.password.value,
            })
            :
            userLogin({
                mobile: this.props.mobile.value,
                password: this.props.password.value,
            });
        promise.then((res) => {
            this.props.dispatch(res)
        })

    }

    _forgetPassword = () => {
        const { mobile } = this.props
        getSMSCode(mobile.value).then((res) => {
            this.props.dispatch(res)
            this.props.navigation.navigate('SMSCode', { route: 'ResetPassword' })
        })
    }



    render() {

        const { password, ifnew } = this.props

        return (
            <View style={[Styles.view]}>
                <View style={[Styles.inputView]}>
                    <FormTextField
                        textInputStyle={Styles.smallTextInput}
                        value={password.value}
                        placeholder={ifnew ? '创建您的登录密码' : '登录密码'}
                        onChangeText={(val) => this.props.dispatch(editPassword(val))}
                        errorText='密码至少有6位'
                        secure={true}
                        validated={password.validated}
                        fieldConStyle={Styles.viewStyle}
                        iconConStyle={Styles.iconConStyle}
                        icon={<LockIcon color={Colors.blueGrey400} />} />

                </View>
                {
                    !ifnew &&
                    <PlainTextButton
                        onPress={this._forgetPassword}
                        textStyle={{ fontSize: 12 }}
                        activeColor={Colors.blueGrey300}
                        title='忘记密码?' />
                }

                <PlainTextButton
                    disable={!password.validated}
                    onPress={this._onLogin}
                    activeColor={Colors.blueGrey500}
                    title='登录' />

            </View>
        );
    }
}

export default AccountPasswordForm;