import { combineReducers } from 'redux';

import MyProfileReducer from './MyProfile';

const rootReducer = combineReducers({                     
  MyProfileReducer: MyProfileReducer,
});

export default rootReducer;