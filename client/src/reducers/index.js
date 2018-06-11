import { combineReducers } from 'redux';

import MyProfileReducer from './MyProfile';
import SearchListReducer from './SearchList';

const rootReducer = combineReducers({                     
  MyProfileReducer: MyProfileReducer,
  SearchListReducer: SearchListReducer
});

export default rootReducer;