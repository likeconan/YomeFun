import React, { Component } from 'react';
import { View } from 'react-native';
import UserDrawerNav from '../navigations/UserDrawerNav';
import AccountTabNav from '../navigations/AccountTabNav';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        isAuthorize: store.userAuthReducer.isAuthorize
    }
})
class AppContainer extends Component {

    render() {
        const { isAuthorize } = this.props
        return (
            <View style={{ flex: 1 }}>
                {
                    isAuthorize ?
                        <UserDrawerNav />
                        :
                        <AccountTabNav />
                }
            </View>
        );
    }
}

export default AppContainer;