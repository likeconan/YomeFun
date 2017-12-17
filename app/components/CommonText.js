import React, { Component } from 'react';
import { Text } from 'react-native'
import Styles from '../styles/CommonText'
import Lang from '../languages';

class CommonText extends Component {
    render() {
        return (
            <Text
                numberOfLines={this.props.numberOfLines}
                style={[Styles.textStyle, this.props.style]}>
                {Lang.instant(this.props.children)}
            </Text>
        );
    }
}

export default CommonText;