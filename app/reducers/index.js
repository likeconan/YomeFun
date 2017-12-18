import { combineReducers } from 'redux';

import userAuthReducer from './user.auth.reducer';
import userLoginReducer from './user.login.reducer';
import activityTypeReducer from './activity.type.reducer';
import activityShowReducer from './activity.show.reducer';

export default combineReducers({
    userAuthReducer,
    userLoginReducer,
    activityTypeReducer,
    activityShowReducer,
});