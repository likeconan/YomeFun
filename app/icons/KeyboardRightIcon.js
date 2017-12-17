import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

class Icon extends Component {
    render() {
        return (
            <Svg
                height={this.props.height ? this.props.height : '24'}
                viewBox="0 0 24 24"
                width={this.props.width ? this.props.width : '24'} >
                <Path fill={this.props.color} d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                <Path d="M0 0h24v24H0z" fill="none" />
            </Svg>
        );
    }
}

export default Icon;