import config from '../utilities/config';

class UserModel {
    constructor(user) {
        user = user || {};
        this.user = {
            ...user,
            userInfo: {
                ...{
                    headPic: { uri: config.staticServer + '/default/default-head-pic.jpg' },
                    nickName: 'Yomer',
                    goingOn: 'Don\'t do anything',
                    backPic: { uri: config.staticServer + '/default/default-back-pic.jpg' }
                },
                ...user.userInfo,
            }
        };
    }
}
export default UserModel;