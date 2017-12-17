import axios from 'axios';
import config from './config';
import store from '../store';
import { Toast } from 'antd-mobile';
import Lang from '../languages';
import UserAuthController from '../realm-controllers/user.auth.controller';

export default (obj) => {
    var p = new Promise((resolve, reject) => {
        if (!obj.disableLoading) {
            var loadingMsg = (obj.loadingMsg ? Lang.instant(obj.loadingMsg) : 'Loading...')
            Toast.loading(loadingMsg, 0, () => { }, true)
        }
        axios({
            url: obj.url,
            baseURL: obj.baseUrl ? obj.baseUrl : config.apiUrl,
            method: obj.method ? obj.method : 'GET',
            headers: {
                'api-access-token': obj.token ? obj.token : UserAuthController.getAuth().token
            },
            params: obj.params,
            data: obj.data,
            timeout: 30000,
        }).then((response) => {
            Toast.hide();
            if (obj.message) {
                Toast.success(Lang.instant(obj.message), 3);
            }
            resolve(response.data)
        }).catch((err) => {
            Toast.hide();
            Toast.fail(Lang.instant(err.response && err.response.data ? err.response.data.message : err.message), 3);
            reject(err.message);
        });
    })
    return p;
}
