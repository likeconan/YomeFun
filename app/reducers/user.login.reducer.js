import UserConstant from '../constants/user.constant'

export default function reducer(state = {
    mobile: {
        value: undefined,
        validated: false
    },
    password: {},
    ifnew: undefined,
    recievedCode: undefined,
}, action) {
    switch (action.type) {
        case UserConstant.EDIT_LOGIN_MOBILE:
            return {
                ...state,
                mobile: action.payload
            }
        case UserConstant.EDIT_LOGIN_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case UserConstant.EDIT_LOGIN_SMSCODE:
            return {
                ...state,
                smsCode: {
                    value: action.payload,
                    validated: state.recievedCode === action.payload
                }
            }
        case UserConstant.USER_GET_SMSCODE:
            return {
                ...state,
                recievedCode: action.payload
            }
        case UserConstant.SET_USER_IFNEW:
            return {
                ...state,
                ifnew: action.payload
            }
        default:
            return state;
    }
}