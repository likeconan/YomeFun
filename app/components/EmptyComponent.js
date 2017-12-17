import React, { Component } from 'react';
import { Text } from 'react-native'
import Styles from '../styles/CommonText'
import Lang from '../languages'

class EmptyComponent extends Component {
    render() {
        return (
            <Text style={[Styles.textStyle, { textAlign: 'center', paddingVertical: 10 }, this.props.style]}>
                {Lang.instant(this.props.title)}
            </Text>
        );
    }
}

export default EmptyComponent;