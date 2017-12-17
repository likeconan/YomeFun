import React, { Component } from 'react';
import { TouchableHighlight, View } from 'react-native';
import CommonText from '../components/CommonText';
import Styles from '../styles/PlainTextButton';
import Colors from '../styles/Colors';

class PlainTextButton extends Component {


    _onPress = () => {
        if (!this.props.disable && this.props.onPress) {
            this.props.onPress()
        }
    }

    render() {
        const color = this.props.disable ? Colors.grey400 : this.props.activeColor
        const underlayColor = this.props.underlayColor ? this.props.underlayColor : Colors.grey50
        return (
            <TouchableHighlight
                underlayColor={underlayColor}
                style={[Styles.touch]}
                onPress={this._onPress}>
                <View style={[Styles.view, this.props.viewStyle]}>
                    <CommonText
                        style={[Styles.textStyle, this.props.textStyle, { color: color }]}>{this.props.title}</CommonText>
                </View>
            </TouchableHighlight>
        );
    }
}

export default PlainTextButton;