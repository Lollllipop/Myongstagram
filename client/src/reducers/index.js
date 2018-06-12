import { combineReducers } from 'redux';

import MyProfileReducer from './MyProfile';
import SearchListReducer from './SearchList';
import PostListReducer from './PostList';

const rootReducer = combineReducers({                     
  MyProfileReducer: MyProfileReducer,
  SearchListReducer: SearchListReducer,
  PostListReducer: PostListReducer,
});

export default rootReducer;