import ActivityConstant from '../constants/activity.constant'
import api from '../utilities/api';
import config from '../utilities/config';

export function getActivityTypes() {

    return dispatch => {
        api({
            url: '/activity/types',
        }).then((data) => {
            data = data.map((val) => {
                val.source = { uri: config.staticServer + val.imageUrl };
                return val
            })
            dispatch({
                type: ActivityConstant.GET_ACTIVITY_TYPES,
                payload: data
            })
        })
    }

}