import React, { Component } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

class Icon extends Component {
    render() {
        return (
            <Svg
                height={this.props.height ? this.props.height : '24'}
                viewBox="0 0 24 24" 
                width={this.props.width ? this.props.width : '24'} >
                <Path fill={this.props.color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                <Path d="M0 0h24v24H0z" fill="none" />
            </Svg>
        );
    }
}

export default Icon;