import { combineReducers } from 'redux';

import userAuthReducer from './user.auth.reducer';
import userLoginReducer from './user.login.reducer';
import activityTypeReducer from './activity.type.reducer';
import activityReducer from './activity.reducer';

export default combineReducers({
    userAuthReducer,
    userLoginReducer,
    activityTypeReducer,
    activityReducer,
});