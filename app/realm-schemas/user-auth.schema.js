import Realm from 'realm';

class UserAuth extends Realm.Object { }


UserAuth.schema = {
    name: 'UserAuth',
    primaryKey: 'id',
    properties: {
        isAuthorize: { type: 'bool', default: false },
        id: 'int',
        token: 'string',
    },
};

export default UserAuth