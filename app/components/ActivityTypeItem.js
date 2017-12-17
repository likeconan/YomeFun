import React, { Component } from 'react';
import { View, TouchableHighlight, ImageBackground, Image } from 'react-native';
import Styles from '../styles/ActivityTypeItem';
import CommonText from '../components/CommonText';

class ActivityTypeItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={[Styles.view]}>
                <TouchableHighlight
                    underlayColor='#ccc'
                    onPress={this.props.onPress}>
                    <ImageBackground
                        style={[Styles.imageStyle]}
                        source={item.source}
                    >
                        <View style={[Styles.titleCon]}>
                            <CommonText style={[Styles.fontStyle]}>{item.name}</CommonText>
                            <CommonText style={[Styles.countStyle]}>{Math.ceil(Math.random() * 100)} 人</CommonText>
                        </View>


                    </ImageBackground>
                </TouchableHighlight>

            </View>
        );
    }
}

export default ActivityTypeItem;