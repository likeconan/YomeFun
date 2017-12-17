import UserConstant from '../constants/user.constant'
import UserAuthController from '../realm-controllers/user.auth.controller';

var auth = UserAuthController.getAuth()

export default function reducer(state = {
    loggedUser: {},
    isAuthorize: auth.isAuthorize,
}, action) {
    switch (action.type) {
        case UserConstant.USER_LOGIN_REGISTER:
            return {
                ...state,
                loggedUser: action.payload,
                isAuthorize: true
            }
        case UserConstant.SET_USER_AUTHORIZE:
            return {
                ...state,
                isAuthorize: action.payload,
            }
        default:
            return state;
    }
}