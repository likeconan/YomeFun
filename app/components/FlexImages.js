import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Styles from '../styles/FlexImages';

class FlexImages extends Component {
    render() {
        const { images = [] } = this.props
        return (
            <View style={[Styles.view, Styles['view_' + images.length]]}>
                {
                    images.map((img, key) => {
                        return (
                            <TouchableOpacity
                                style={[Styles.imgCon, Styles['flex_' + images.length + '_' + key]]}
                                key={key}>
                                <Image
                                    source={img}
                                    style={[Styles.imgStyle, Styles['image_' + images.length + '_' + key]]}
                                    resizeMode='cover' />
                            </TouchableOpacity>

                        )

                    })
                }
            </View>
        );
    }
}

export default FlexImages;