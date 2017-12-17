import React, { Component } from 'react';
import { View, Text } from 'react-native';

class UserProfileScreen extends Component {


    componentWillMount() {
        console.log(this.props.navigation)
    }


    render() {


        return (
            <View>
                <Text>UserProfile</Text>
            </View >


        );
    }
}

export default UserProfileScreen;