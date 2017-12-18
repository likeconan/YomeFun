import ActivityConstant from '../constants/activity.constant'
import api from '../utilities/api';
import config from '../utilities/config';
import UserModel from '../models/user.model';

export function getActivities() {

    return dispatch => {
        // api({
        //     url: '/activity',
        // }).then((data) => {
        //     data = data.map((val) => {
        //         val.source = { uri: config.staticServer + val.imageUrl };
        //         return val
        //     })
        //     dispatch({
        //         type: ActivityConstant.GET_ACTIVITY_TYPES,
        //         payload: data
        //     })
        // })

        var data = [{
            user: new UserModel().user,
            content: {
                description: 'I want to join some activity and see some moives',
                images: [
                    { uri: 'https://cdn.th3rdwave.coffee/articles/rkvHXu_Il/rkvHXu_Il-1100-700.jpg' },
                ]
            }
        },
        {
            user: new UserModel().user,
            content: {
                description: 'I want to join some activity and see some moives',
                images: [
                    { uri: 'https://cdn.th3rdwave.coffee/articles/rkvHXu_Il/rkvHXu_Il-1100-700.jpg' },
                    { uri: 'https://cdn.th3rdwave.coffee/articles/rkTnGunIx/rkTnGunIx-1100-700.jpg' },
                ]
            }
        },
        {
            user: new UserModel().user,
            content: {
                description: 'I want to join some activity and see some moives',
                images: [
                    { uri: 'https://cdn.th3rdwave.coffee/articles/rkvHXu_Il/rkvHXu_Il-1100-700.jpg' },
                    { uri: 'https://cdn.th3rdwave.coffee/articles/rkTnGunIx/rkTnGunIx-1100-700.jpg' },
                    { uri: 'https://cdn.th3rdwave.coffee/articles/HknxZ9awg/HknxZ9awg-1100-700.jpg' }
                ]
            }
        },
        {
            user: new UserModel().user,
            content: {
                description: 'I want to join some activity and see some moives',
                images: [
                    { uri: 'https://cdn.th3rdwave.coffee/articles/rkvHXu_Il/rkvHXu_Il-1100-700.jpg' },
                    { uri: 'https://cdn.th3rdwave.coffee/articles/rkTnGunIx/rkTnGunIx-1100-700.jpg' },
                    { uri: 'https://cdn.th3rdwave.coffee/articles/HknxZ9awg/HknxZ9awg-1100-700.jpg' },
                    { uri: 'https://cdn.th3rdwave.coffee/articles/HknxZ9awg/HknxZ9awg-1100-700.jpg' }

                ]
            }
        }]

        dispatch({
            type: ActivityConstant.GET_ACTIVITIES,
            payload: data
        })
    }

}