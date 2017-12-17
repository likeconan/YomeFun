import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import CommonText from '../components/CommonText';
import Styles from '../styles/FormTextField';
import Lang from '../languages';


class FormTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            blured: false
        };
    }
    _focus = () => {
        this.setState({ focused: true });
    }
    _blur = () => {
        this.setState({ blured: true })
    }

    render() {
        return (
            <View style={[Styles.view, this.props.viewStyle]}>
                <View style={[Styles.fieldCon, this.props.fieldConStyle]}>
                    <View style={[Styles.iconCon, this.props.iconConStyle]}>
                        {this.props.icon}
                    </View>
                    <TextInput
                        value={this.props.value}
                        style={[Styles.textInputStyle, this.props.textInputStyle]}
                        autoCorrect={false}
                        keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
                        placeholder={Lang.instant(this.props.placeholder)}
                        placeholderTextColor={this.props.placeholderTextColor}
                        secureTextEntry={this.props.secure}
                        underlineColorAndroid='transparent'
                        onBlur={this._blur}
                        onFocus={this._focus}
                        onChangeText={this.props.onChangeText} />

                </View>
                <CommonText style={Styles.errorText}>
                    {(this.state.focused && this.state.blured || this.props.submitted) && !this.props.validated ? this.props.errorText : ''}
                </CommonText>
            </View>
        );
    }
}

export default FormTextField;