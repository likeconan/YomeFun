import ActivityConstant from '../constants/activity.constant'

export default function reducer(state = {
    activities: [],
}, action) {
    switch (action.type) {
        case ActivityConstant.GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        default:
            return state;
    }
}