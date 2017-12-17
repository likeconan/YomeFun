import UserConstant from '../constants/user.constant'
import validator from 'validator';
import api from '../utilities/api';
import store from '../store';
import UserModel from '../models/user.model';
import UserAuthCtrl from '../realm-controllers/user.auth.controller';


export function userLogin(obj) {
    return new Promise((resolve, reject) => {
        api({
            url: 'users/login/client_mobile',
            params: obj
        }).then((data) => {
            return UserAuthCtrl.save({
                isAuthorize: true,
                token: data.token
            }, data)
        }).then((user) => {
            resolve({
                type: UserConstant.USER_LOGIN_REGISTER,
                payload: new UserModel(user.user).user
            });
        }).catch(() => {
            reject()
        })
    })
}


export function userRegister(obj) {
    return new Promise((resolve, reject) => {
        api({
            url: 'users/register/client_mobile',
            method: 'POST',
            data: obj
        }).then((data) => {
            return UserAuthCtrl.save({
                isAuthorize: true,
                token: data.token
            }, data)
        }).then((user) => {
            resolve({
                type: UserConstant.USER_LOGIN_REGISTER,
                payload: new UserModel(user.user).user
            });
        }).catch(() => {
            reject()
        })
    })
}


export function checkUserExist(mobile) {
    return new Promise((resolve, reject) => {
        api({
            url: 'users/exist/' + mobile,
        }).then((data) => {

            store.dispatch({
                type: UserConstant.SET_USER_IFNEW,
                payload: data.ifnew
            })

            resolve(data)

        }).catch(() => {
            reject()
        })
    })
}




export function editMobile(val) {
    return {
        type: UserConstant.EDIT_LOGIN_MOBILE,
        payload: {
            value: val,
            validated: /^1[3|4|5|8][0-9]\d{8}$/.test(val)
        }
    }
}

export function editPassword(val) {
    return {
        type: UserConstant.EDIT_LOGIN_PASSWORD,
        payload: {
            value: val,
            validated: validator.isLength(val, { min: 6 })
        }
    }
}

export function editSMSCode(val) {
    return {
        type: UserConstant.EDIT_LOGIN_SMSCODE,
        payload: val
    }
}

export function getSMSCode(mobile) {
    return new Promise((resolve, reject) => {
        api({
            url: '/sms',
            method: 'POST',
            data: {
                to: mobile
            }
        }).then((data) => {
            resolve({
                type: UserConstant.USER_GET_SMSCODE,
                payload: data.code.toString()
            })
        }).catch(() => {
            reject()
        })
    })
}