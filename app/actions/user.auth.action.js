import UserConstant from '../constants/user.constant'
import api from '../utilities/api';
import UserModel from '../models/user.model';
import UserAuthCtrl from '../realm-controllers/user.auth.controller';

export function userAuth(obj) {
    return (dispatch) => {
        api({
            url: '/users/authorize/client_mobile',
            params: obj
        }).then((data) => {
            return UserAuthCtrl.save({
                isAuthorize: true,
                token: data.token
            }, data)
        }).then((user) => {
            dispatch({
                type: UserConstant.USER_LOGIN_REGISTER,
                payload: new UserModel(user).user
            })
        }).catch(() => {
            UserAuthCtrl.save({
                isAuthorize: false,
                token: ''
            })
            dispatch({
                type: UserConstant.SET_USER_AUTHORIZE,
                payload: false
            })
            reject()
        })
    }
}

