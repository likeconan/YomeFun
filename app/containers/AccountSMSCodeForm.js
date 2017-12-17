import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import FormTextField from '../components/FormTextField';
import EmailIcon from '../icons/EmailIcon';
import PlainTextButton from '../components/PlainTextButton';
import Styles from '../styles/AccountMobileForm';
import Colors from '../styles/Colors';
import { connect } from 'react-redux';
import CodeInput from 'react-native-confirmation-code-input';
import { Toast } from 'antd-mobile'

@connect((store) => {
    return {
        recievedCode: store.userLoginReducer.recievedCode,
    }
})
class AccountSMSCodeForm extends Component {

    _onFinish = (isValid, code) => {
        if (isValid) {
            const { navigation } = this.props
            this.props.navigation.navigate(navigation.state.params.route)
            this.refs.codeInputRef.clear()
        } else {
            Toast.fail('验证码错误', 3);
        }
    }




    render() {

        const { recievedCode } = this.props

        return (
            <View style={[Styles.view]}>
                <View style={[Styles.inputView]}>
                    <CodeInput
                        keyboardType="numeric"
                        ref="codeInputRef"
                        codeLength={5}
                        activeColor={Colors.blueGrey700}
                        inactiveColor={Colors.blueGrey300}
                        className='border-b'
                        compareWithCode={recievedCode}
                        autoFocus={true}
                        codeInputStyle={{ fontWeight: '800' }}
                        onFulfill={this._onFinish}
                    />
                </View>

            </View>
        );
    }
}

export default AccountSMSCodeForm;