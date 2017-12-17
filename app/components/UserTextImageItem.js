import React, { Component } from 'react';
import { View } from 'react-native';
import CommonText from '../components/CommonText';
import Styles from '../styles/UserTextImage';
import UserHeader from '../components/UserHeader';
import FlexImages from '../components/FlexImages';

class UserTextImageItem extends Component {
    render() {
        const { user, content = {} } = this.props

        return (
            <View style={[Styles.view]}>
                <View style={[Styles.userCon]}>
                    <UserHeader user={user} />
                </View>
                <View style={[Styles.contentCon]}>
                    <CommonText style={[Styles.description]}>{content.description}</CommonText>
                    <FlexImages images={content.images} />
                </View>
            </View>
        );
    }
}

export default UserTextImageItem;