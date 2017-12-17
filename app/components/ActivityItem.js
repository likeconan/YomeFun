import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Button } from 'react-native';
import CommonText from '../components/CommonText';
import PlainTextButton from '../components/PlainTextButton';
import Styles from '../styles/ActivityItem';


class ActivityItem extends Component {


    render() {
        const { data } = this.props

        return (
            <View style={[Styles.view]}>
                <Image
                    style={[Styles.firstImage]}
                    resizeMode='cover'
                    resizeMethod='scale'
                    source={data.firstImage.source} />
                <View style={[Styles.backCover]} elevation={2}>

                </View>
                <View style={[Styles.subImgCon]} >
                    {
                        data.subImages.map((val, key) => (
                            <Image
                                resizeMode='cover'
                                resizeMethod='scale'
                                key={key}
                                style={[Styles.subImage]}
                                source={val.source} />
                        ))
                    }
                </View>
                <View style={[Styles.userCon]} elevation={3}>
                    <Image
                        source={data.firstImage.source}
                        style={Styles.userHeader} />
                    <View style={[Styles.textCon]}>
                        <View style={[Styles.rowFlex]}>
                            <CommonText style={[Styles.nameStyle]}>Conan</CommonText>
                            <PlainTextButton title='邀请' />
                        </View>
                        <CommonText style={[Styles.goingOnStyle]}>What is going on?</CommonText>
                    </View>

                </View>
                <View style={[Styles.contentCon]}>
                    <CommonText style={[Styles.contentStyle]}>我想一起去看大海，有人一起吗？</CommonText>
                </View>
                {/* <View style={[Styles.bottomCon]}>
                    <IconText
                        icon={<AccountCircleIcon />}
                        text='hello you' />
                </View> */}
            </View>
        );
    }
}

export default ActivityItem;