import realm from '../realm-schemas';

class UserAuthController {

    getAuth = () => {
        var obj = realm.objects('UserAuth')[0];
        return obj ? obj : {};
    }

    save = (auth, data) => {
        return new Promise((resolve, reject) => {
            realm.write(() => {
                realm.create('UserAuth', { ...auth, id: 1 }, true);
                resolve(data);
            })
        })

    }
}


export default new UserAuthController()