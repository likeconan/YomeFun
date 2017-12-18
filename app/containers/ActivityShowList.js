import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ActivityItem from '../components/ActivityItem';
import UserTextImageItem from '../components/UserTextImageItem';
import { getActivities } from '../actions/activity.show.action';
import AppHeaderBack from '../components/AppHeaderBack';
import EmptyComponent from '../components/EmptyComponent';

@connect((store) => {
    return {
        data: store.activityShowReducer.activities
    }
})
class ActivityShowList extends Component {

    _loadAction = () => {
        this.props.dispatch(getActivities())
    }

    componentWillMount() {
        this._loadAction()
    }

    _keyExtractor = (item, index) => index

    render() {

        const { data, navigation } = this.props

        return (
            <FlatList
                data={this.props.data}
                ListEmptyComponent={<EmptyComponent title='no_results' />}
                keyExtractor={this._keyExtractor}
                renderItem={
                    ({ item }) => <UserTextImageItem user={item.user} content={item.content} />
                } />
        );
    }
}


export default ActivityShowList;